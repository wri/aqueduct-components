```js
const options = [
  { label: 'Banana', value: 'banana' },
  { label: 'A huge pear to test long names', value: 'pear' },
  { label: 'Apple', value: 'apple' }
];

<div>
  <div style={{ backgroundColor: '#2E57B8', padding: 30}}>
    <Field 
      name="test-1"
      label="A fruit selector!"
    >
      <CustomSelect
        theme="light"
        options={options}
        placeholder="Select a yummy fruit!"
        onChange={option => console.log(option)}
      />
    </Field>
  </div>
  <div style={{ backgroundColor: '#f5f4f0', padding: 30, marginTop: 16 }}>
    <Field
      name="test-2"
      label="A fruit selector!"
      theme="dark"
    >
      <CustomSelect
        theme="dark"
        options={options}
        placeholder="Select a yummy fruit!"
        onChange={option => console.log(option)}
      />
    </Field>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2E57B8', padding: 30, marginTop: 16 }}>
    <Field 
      name="test-3"
      label="A fruit selector! (inline version)"
      className="-full-width"
    >
      <CustomSelect
        theme="light"
        options={options}
        placeholder="Select a yummy fruit!"
        onChange={option => console.log(option)}
      />
    </Field>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f5f4f0', padding: 30, marginTop: 16 }}>
    <Field 
      name="test-4"
      label="A fruit selector! (inline version)"
      className="-full-width"
      theme="dark"
    >
      <CustomSelect
        theme="dark"
        options={options}
        placeholder="Select a huge and yummy fruit!"
        onChange={option => console.log(option)}
        isClearable
      />
    </Field>
  </div>
</div>
```
