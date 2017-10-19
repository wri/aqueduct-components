import { substitution, concatenation } from './text';
import { CROP_OPTIONS } from '../data/filters';

// Util functions
function getConversion(obj, params, sqlParams) {
  const isObject = typeof obj === 'object';
  let str = obj;
  if (isObject) {
    str = JSON.stringify(obj);
  }
  str = substitution(str, params);
  str = concatenation(str, sqlParams);

  return isObject ? JSON.parse(str) : str;
}

function getIndicator({ indicator }) {
  const layers = {
    // Water stress
    '4b000ded-5f4d-4dbd-83c9-03f2dfcd36db': 'water_stress',
    // Seasonal variability
    'd9785282-2140-463f-a82d-f7296687055a': 'seasonal_variability',
    // Interannual variability
    'bf657e60-de9c-4b7e-8736-d573d38e3ce1': 'interannual_variability',
    // Drought severity soil moisture
    '9c450642-f976-40eb-96b4-0c904d519578': 'drought_severity_soil',
    // Groundwater stress
    'b53ef8c5-8554-4a4a-a100-fdf5a022cb4e': 'groundwater_stress',
    // Drought severity soil moisture
    'cbd0d0f8-edf9-47bc-93ef-71c1a5e5fed7': 'groundwater_decline_trend',
    // none
    none: 'water_stress'
  };

  return layers[indicator] || 'water_stress';
}

// Keep this function by now to add compatibility. REMOVE in the future.
function getWaterColumn({ indicator, year, type }, sufix, widget) {
  const layers = {
    // Water stress
    '4b000ded-5f4d-4dbd-83c9-03f2dfcd36db': {
      indicator: 'ws',
      dataType: type === 'change_from_baseline' && !widget ? 'c' : 't',
      sufix: type === 'change_from_baseline' && !widget ? 'l' : 'r'
    },
    // Seasonal variability
    'd9785282-2140-463f-a82d-f7296687055a': {
      indicator: 'sv',
      dataType: type === 'change_from_baseline' && !widget ? 'c' : 't',
      sufix: type === 'change_from_baseline' && !widget ? 'l' : 'r'
    },
    none: {
      indicator: 'ws',
      dataType: type === 'change_from_baseline' && !widget ? 'c' : 't',
      sufix: type === 'change_from_baseline' && !widget ? 'l' : 'r'
    }
  };

  const layer = layers[indicator] || layers['none'];

  // Dictionary
  const yearOptions = {
    baseline: 'bs',
    2020: '20',
    2030: '30',
    2040: '40',
    2050: '50'
  };
  let _indicator = layer.indicator;
  const _year = yearOptions[year];
  const _dataType = layer.dataType;
  const _scenario = (year === 'baseline') ? '00' : '28';
  const _sufix = sufix || layer.sufix;


  /**
   * A bomb has been planted!
   *
   * For Seasonal Variability-based widgets, their table name
   * don't match with its dataset one, that's why we have to changed it
   * manually. This should be REMOVED in the future.
   **/
  if (layer.indicator === 'sv' && widget === true) {
    _indicator = 'ws';
  }

  return `${_indicator}${_year}${_scenario}${_dataType}${_sufix}`;
}

/**
 * getObjectConversion
 * @param  {Object} [obj={}]     [object to be converted]
 * @param  {Object} [filters={}] [filters]
 * @param  {String} category     [category is a string to split some conversions and dictionaries. It can be 'food', 'water', 'widget']
 * @return {[type]}              [description]
 */
export function getObjectConversion(obj = {}, filters = {}, category, paramsConfig = [], sqlConfig = []) {
  const dictionaries = {
    water: {
      yearOptions: {
        baseline: 2014,
        2020: 2020,
        2030: 2030,
        2040: 2040,
        2050: 2050
      }
    },
    food: {
      yearOptions: {
        baseline: 2005,
        2020: 2020,
        2030: 2030,
        2040: 2040,
        2050: 2050
      }
    },
    'widget-2010': {
      yearOptions: {
        baseline: 2010,
        2020: 2020,
        2030: 2030,
        2040: 2040
      }
    },
    'widget-2014': {
      yearOptions: {
        baseline: 2014,
        2020: 2020,
        2030: 2030,
        2040: 2040
      }
    }
  };

  const dictionary = category ? dictionaries[category] : null;

  const conversions = {
    iso: key => ({
      key,
      value: (filters.scope === 'country' && filters.country) ? filters.country : null
    }),
    countryName: key => ({
      key,
      value: filters.countryName || undefined
    }),
    'crops.iso': key => ({
      key,
      value: (filters.scope === 'country' && filters.country) ? filters.country : null
    }),
    crop: key => ({
      key,
      value: filters.crop !== 'all' ? filters.crop : null
    }),
    crop_name: key => ({
      key,
      value: filters.crop !== 'all' ? filters.crop : 'All crops'
    }),
    type: key => ({
      key,
      value: filters.type || 'absolute'
    }),
    period: key => ({
      key,
      value: filters.period || 'year'
    }),
    period_value: key => ({
      key,
      value: filters.period_value || null
    }),
    year: (key, dictionaryName) => {
      return {
        key,
        value: dictionaries[dictionaryName || category].yearOptions[filters[key]] || 'baseline'
      }
    },
    irrigation: key => {
      return {
        key,
        // We can't have a irrigation different from 1, in this case we don't need to add anything
        value: (filters[key] !== 'all') ? filters[key] : null
      }
    },
    commodity: (key, dictionaryName, isSql) => ({
      key: (isSql) ? `lower(${key})` : key,
      value: filters.crop !== 'all' ? filters.crop : null
    }),
    crop_scenario: key => ({
      key,
      value: filters.crop_scenario || 'SSP2-MIRO'
    }),
    indicator: key => ({
      key,
      value: getIndicator(filters)
    }),
    model: key => ({
      key,
      value: filters.year === 'baseline' ? 'historic' : 'bau'
    }),
    // Old params. Keep them to add compatibility with old format
    water_column: (param, dictionaryName, isWidget = false) => ({
      key: param.key,
      value: getWaterColumn(filters, param.sufix, isWidget)
    }),
    color: (key) => {
      const crop = CROP_OPTIONS.find(c => c.value === filters.crop);
      return {
        key,
        value: (crop) ? crop.color : '#777777'
      };
    }
  };

  const params = paramsConfig && paramsConfig.map((p) => {
    // Remove once water_column is not used anymore
    if (p.key === 'water_column') {
      if (category === 'widget-2010' || category === 'widget-2014') {
        return conversions[p.key] ? conversions[p.key](p, p.dictionary, true) : filters[p.key];
      }

      return conversions[p.key] ? conversions[p.key](p) : filters[p.key];
    }
    return conversions[p.key] ? conversions[p.key](p.key, p.dictionary) : filters[p.key];
  });

  const sqlParams = sqlConfig && sqlConfig.map((param) => {
    return {
      key: param.key,
      keyParams: param.keyParams.map((p) => {
        return conversions[p.key] ? conversions[p.key](p.key, p.dictionary, true) : filters[p.key];
      })
    };
  });

  // Text widgets have a different parse
  if (obj.type === 'text') {
    return Object.assign({}, obj, {
      data: JSON.parse(getConversion(JSON.stringify(obj.data), params || [], sqlParams || []))
    });
  }

  return getConversion(obj, params || [], sqlParams || []);
}

/**
 * widgetsFilter
 * @param  {Object} widget      [Object to be converted]
 * @param  {Object} filters     [Filters]
 * @param  {Object} compare
 * @param  {Array} datasetTags
 * @return {Boolean}
 */
export function widgetsFilter(widget, { scope, crop, country, indicator }, compare, datasetTags) {
  const _crop = crop === 'all' ? 'all_crops' : 'one_crop';
  const _country = ((scope === 'country' && country) || compare.countries.length) ? 'country' : 'global';

  return datasetTags && datasetTags.includes(_crop) && datasetTags.includes(_country);
}
