```js
const RADIO_SAMPLE_A = [
  { label: 'radio 1', value: '1', checked: false },
  { label: 'radio 2', value: '2', checked: true },
  { label: 'radio 3', value: '3', checked: false }
];

const RADIO_SAMPLE_B = [
  { label: 'radio 4', value: '4', checked: false },
  { label: 'radio 5', value: '5', checked: false },
  { label: 'radio 6', value: '6', checked: true }
];

<div>
  <div style={{ backgroundColor: '#f5f4f0', padding: 30 }}>
    <RadioGroup
      items={RADIO_SAMPLE_A}
      name="radio-group-name-a"
      title="Title of my radio group"
      onChange={selectedItems => console.log(selectedItems)}
    />
  </div>

  <div style={{ backgroundColor: '#2E57B8', padding: 30, marginTop: 16 }}>
    <RadioGroup
      items={RADIO_SAMPLE_B}
      name="radio-group-name-b"
      theme="light"
      title="Title of my radio group"
      onChange={selectedItems => console.log(selectedItems)}
    />
  </div>
</div>
```
