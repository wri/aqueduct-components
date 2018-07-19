```js
const CHECKBOX_ITEMS = [
  { label: 'Checkbox 1', value: '1', checked: false },
  { label: 'Checkbox 2', value: '2', checked: true },
  { label: 'Checkbox 3', value: '3', checked: false }
];

<CheckboxGroup
  items={CHECKBOX_ITEMS}
  name="checkbox-group-name"
  title="Title of my checkbox group"
  onChange={selectedItems => console.log(selectedItems)}
/>
```
