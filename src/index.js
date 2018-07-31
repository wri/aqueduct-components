// load all styles for webpack to copy them
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('../styles/', true));
// requireAll(require.context('./icons/', true));

export default {};

// icons
export { default as Icons } from './icons';

// UI components
export { default as Header } from './components/ui/header';
export { default as Icon } from './components/ui/icon';
export { default as Modal } from './components/ui/modal';
export { default as Sidebar } from './components/ui/sidebar';
export { default as Spinner } from './components/ui/spinner';
export { default as Timeline } from './components/ui/timeline';
export { default as Tabs } from './components/ui/tabs';

// form components
export { default as Field } from './components/form/field';
export { default as Checkbox } from './components/form/checkbox';
export { default as CheckboxGroup } from './components/form/checkbox-group';
export { default as Radio } from './components/form/radio';
export { default as RadioGroup } from './components/form/radio-group';
export { default as CustomSelect } from './components/form/custom-select';

// utils
export { downloadFile } from './utils/download';
export { get, post, remove } from './utils/request';
export { substitution, concatenation, capitalizeFirstLetter } from './utils/text';
export { dataURItoBlob, saveAsFile } from './utils/image';
