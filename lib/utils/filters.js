'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getObjectConversion = getObjectConversion;
exports.widgetsFilter = widgetsFilter;

var _text = require('./text');

var _filters = require('../data/filters');

// Util functions
function getConversion(obj, params, sqlParams) {
  var isObject = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  var str = obj;
  if (isObject) {
    str = JSON.stringify(obj);
  }
  str = (0, _text.substitution)(str, params);
  str = (0, _text.concatenation)(str, sqlParams);

  return isObject ? JSON.parse(str) : str;
}

function getIndicator(_ref) {
  var indicator = _ref.indicator;

  var layers = {
    // Water stress
    '4b000ded-5f4d-4dbd-83c9-03f2dfcd36db': 'water_stress',
    // Seasonal variability
    'd9785282-2140-463f-a82d-f7296687055a': 'seasonal_variability',
    // none
    none: 'water_stress'
  };

  return layers[indicator] || 'water_stress';
}

// Keep this function by now to add compatibility. REMOVE in the future.
function getWaterColumn(_ref2, sufix, widget) {
  var indicator = _ref2.indicator,
      year = _ref2.year,
      type = _ref2.type;

  var layers = {
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

  // Dictionary
  var yearOptions = {
    baseline: 'bs',
    2020: '20',
    2030: '30',
    2040: '40',
    2050: '50'
  };

  var _indicator = layers[indicator].indicator;
  var _year = yearOptions[year];
  var _dataType = layers[indicator].dataType;
  var _scenario = year === 'baseline' ? '00' : '28';
  var _sufix = sufix || layers[indicator].sufix;

  /**
   * A bomb has been planted!
   *
   * For Seasonal Variability-based widgets, their table name
   * don't match with its dataset one, that's why we have to changed it
   * manually. This should be REMOVED in the future.
   **/
  if (layers[indicator].indicator === 'sv' && widget === true) {
    _indicator = 'ws';
  }

  return '' + _indicator + _year + _scenario + _dataType + _sufix;
}

/**
 * getObjectConversion
 * @param  {Object} [obj={}]     [object to be converted]
 * @param  {Object} [filters={}] [filters]
 * @param  {String} category     [category is a string to split some conversions and dictionaries. It can be 'food', 'water', 'widget']
 * @return {[type]}              [description]
 */
function getObjectConversion() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var category = arguments[2];

  var dictionaries = {
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
    widget: {
      yearOptions: {
        baseline: 2010,
        2020: 2020,
        2030: 2030,
        2040: 2040
      }
    }
  };

  var dictionary = category ? dictionaries[category] : null;

  var conversions = {
    iso: function iso(key) {
      return {
        key: key,
        value: filters.scope === 'country' && filters.country ? filters.country : null
      };
    },
    'crops.iso': function cropsIso(key) {
      return {
        key: key,
        value: filters.scope === 'country' && filters.country ? filters.country : null
      };
    },
    crop: function crop(key) {
      return {
        key: key,
        value: filters.crop !== 'all' ? filters.crop : null
      };
    },
    type: function type(key) {
      return {
        key: key,
        value: filters.type || 'absolute'
      };
    },
    period: function period(key) {
      return {
        key: key,
        value: filters.period || 'year'
      };
    },
    period_value: function period_value(key) {
      return {
        key: key,
        value: filters.period_value || null
      };
    },
    year: function year(key, dictionaryName) {
      return {
        key: key,
        value: dictionaries[dictionaryName || category].yearOptions[filters[key]] || 'baseline'
      };
    },
    irrigation: function irrigation(key) {
      return {
        key: key,
        // We can't have a irrigation different from 1, in this case we don't need to add anything
        value: !filters[key] || filters[key].length === 0 || filters[key].length === 2 ? null : filters[key]
      };
    },
    commodity: function commodity(key, dictionaryName, isSql) {
      return {
        key: isSql ? 'lower(' + key + ')' : key,
        value: filters.crop !== 'all' ? filters.crop : null
      };
    },
    crop_scenario: function crop_scenario(key) {
      return {
        key: key,
        value: filters.crop_scenario || 'SSP2-MIRO'
      };
    },
    indicator: function indicator(key) {
      return {
        key: key,
        value: getIndicator(filters)
      };
    },
    model: function model(key) {
      return {
        key: key,
        value: filters.year === 'baseline' ? 'historic' : 'bau'
      };
    },
    // Old params. Keep them to add compatibility with old format
    water_column: function water_column(param, dictionaryName) {
      var isWidget = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return {
        key: param.key,
        value: getWaterColumn(filters, param.sufix, isWidget)
      };
    },
    color: function color(key) {
      var crop = _filters.CROP_OPTIONS.find(function (c) {
        return c.value === filters.crop;
      });
      return {
        key: key,
        value: crop ? crop.color : '#777777'
      };
    }
  };

  var params = obj.paramsConfig && obj.paramsConfig.map(function (p) {
    // Remove once water_column is not used anymore
    if (p.key === 'water_column') {
      if (category === 'widget') {
        return conversions[p.key] ? conversions[p.key](p, p.dictionary, true) : filters[p.key];
      }

      return conversions[p.key] ? conversions[p.key](p) : filters[p.key];
    }
    return conversions[p.key] ? conversions[p.key](p.key, p.dictionary) : filters[p.key];
  });

  var sqlParams = obj.sqlConfig && obj.sqlConfig.map(function (param) {
    return {
      key: param.key,
      keyParams: param.keyParams.map(function (p) {
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
function widgetsFilter(widget, _ref3, compare, datasetTags) {
  var scope = _ref3.scope,
      crop = _ref3.crop,
      country = _ref3.country,
      indicator = _ref3.indicator;

  var _crop = crop === 'all' ? 'all_crops' : 'one_crop';
  var _country = scope === 'country' && country || compare.countries.length ? 'country' : 'global';

  return datasetTags && datasetTags.includes(_crop) && datasetTags.includes(_country);
}