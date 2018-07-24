```js
const CHECKBOX_ITEMS = [
  { label: 'Checkbox 1', value: '1', checked: false },
  { label: 'Checkbox 2', value: '2', checked: true },
  { label: 'Checkbox 3', value: '3', checked: false }
];

<div>
  <div style={{ backgroundColor: '#f5f4f0', padding: 30 }}>
    <CheckboxGroup
      items={CHECKBOX_ITEMS}
      name="checkbox-group-name"
      title="Title of my checkbox group"
      onChange={selectedItems => console.log(selectedItems)}
    />
  </div>

  <div style={{ backgroundColor: '#2E57B8', padding: 30, marginTop: 16 }}>
    <CheckboxGroup
      items={CHECKBOX_ITEMS}
      name="checkbox-group-name"
      theme="light"
      title="Title of my checkbox group"
      onChange={selectedItems => console.log(selectedItems)}
    />
  </div>
</div>
```
