'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CATEGORIES = {
  water: 'Water risk',
  food: 'Food security',
  crop: 'Crops'
};

var YEAR_OPTIONS = [{ value: 'baseline', label: 'Baseline' }, { value: '2020', label: '2020' }, { value: '2030', label: '2030' }, { value: '2040', label: '2040' }];

var CROP_COLOR_DICTIONARY = {
  cereals: '#d95997',
  leguminous: '#1230a5',
  roots_and_tubers: '#32866d',
  fruit_and_nuts: '#ffe01b',
  oilseed_crops: '#6e23bd'
};

var CROP_OPTIONS = [{ value: 'all', label: 'All crops' }, { value: 'all pulses', label: 'Other pulses', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'wheat', label: 'Wheat', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'lentils', label: 'Lentils', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'cowpeas', label: 'Cowpeas', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'barley', label: 'Barley', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'beans', label: 'Beans', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'potato', label: 'Potato', color: CROP_COLOR_DICTIONARY.roots_and_tubers }, { value: 'sorghum', label: 'Sorghum', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'pigeonpeas', label: 'Pigeonpeas', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'sweet potato', label: 'Sweet potato', color: CROP_COLOR_DICTIONARY.roots_and_tubers }, { value: 'soybean', label: 'Soybean', color: CROP_COLOR_DICTIONARY.oilseed_crops }, { value: 'all cereals', label: 'Other cereals', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'cassava', label: 'Cassava', color: CROP_COLOR_DICTIONARY.roots_and_tubers }, { value: 'rice', label: 'Rice', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'groundnut', label: 'Groundnut', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'chickpeas', label: 'Chickpeas', color: CROP_COLOR_DICTIONARY.leguminous }, { value: 'plantain', label: 'Plantain', color: CROP_COLOR_DICTIONARY.fruit_and_nuts }, { value: 'banana', label: 'Banana', color: CROP_COLOR_DICTIONARY.fruit_and_nuts }, { value: 'millet', label: 'Millet', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'maize', label: 'Maize', color: CROP_COLOR_DICTIONARY.cereals }, { value: 'yams', label: 'Yams', color: CROP_COLOR_DICTIONARY.roots_and_tubers }];

var IRRIGATION_OPTIONS = [{ value: 'irrigated', label: 'Irrigated' }, { value: 'rainfed', label: 'Rainfed' }];

var DATA_TYPE_OPTIONS = [{ label: 'Absolute value', value: 'absolute' }, { label: 'Change from baseline', value: 'change_from_baseline' }];

exports.CATEGORIES = CATEGORIES;
exports.YEAR_OPTIONS = YEAR_OPTIONS;
exports.CROP_COLOR_DICTIONARY = CROP_COLOR_DICTIONARY;
exports.CROP_OPTIONS = CROP_OPTIONS;
exports.IRRIGATION_OPTIONS = IRRIGATION_OPTIONS;
exports.DATA_TYPE_OPTIONS = DATA_TYPE_OPTIONS;