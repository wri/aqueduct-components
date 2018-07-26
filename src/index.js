// load all styles for webpack to copy them
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../styles/', true));
requireAll(require.context('./icons/', true));

export default {};
// Constants

// Data
export { default as APP_DEFINITIONS } from './data/definitions';
export { LEGEND_OPACITY_RANGE } from './data/legend';
export { YEAR_OPTIONS, CROP_COLOR_DICTIONARY, CROP_OPTIONS, IRRIGATION_OPTIONS, DATA_TYPE_OPTIONS } from './data/filters';

// UI components
export { default as Header } from './components/ui/header';
export { default as Icon } from './components/ui/icon';
export { default as Sidebar } from './components/ui/sidebar';
export { default as Spinner } from './components/ui/spinner';
export { default as Timeline } from './components/ui/timeline';
export { default as Tabs } from './components/ui/tabs';

// map components
export { default as MapControls } from './components/map/map-controls';

// form components
export { default as Field } from './components/form/field';
export { default as Checkbox } from './components/form/checkbox';
export { default as CheckboxGroup } from './components/form/checkbox-group';
export { default as Radio } from './components/form/radio';
export { default as RadioGroup } from './components/form/radio-group';
export { default as CustomSelect } from './components/form/custom-select';

// Modal
export { default as Modal } from './components/ui/Modal';
export { default as InfoModal } from './components/ui/Modal/InfoModal';
export { default as SourceModal } from './components/ui/Modal/SourceModal';
export { default as ShareModal } from './components/ui/Modal/ShareModal';

// Reducers
export { closeModal, toggleModal, modalLoading, setModalOptions, modalReducer } from './components/ui/Modal/reducer';

// Utils
export { downloadFile } from './utils/download';
export { get, post, remove } from './utils/request';
export { substitution, concatenation, capitalizeFirstLetter } from './utils/text';
export { getObjectConversion, widgetsFilter } from './utils/filters';
export { dataURItoBlob, saveAsFile } from './utils/image';
