```js

const options = [
  { label: 'Banana', value: 'banana' },
  { label: 'Pear', value: 'pear' },
  { label: 'Apple', value: 'apple' }
];

<div>
  <div style={{ backgroundColor: '#f5f4f0', padding: 30}}>
    <CustomSelect
      theme="dark"
      options={options}
      placeholder="Select a yummy fruit!"
      onChange={option => console.log(option)}
      isClearable
    />
  </div>

  <div style={{ backgroundColor: '#2E57B8', padding: 30, marginTop: 16  }}>
    <CustomSelect
      options={options}
      placeholder="Select a yummy fruit!"
      onChange={option => console.log(option)}
      isClearable
    />
  </div>
</div>
```
