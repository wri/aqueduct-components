```js
<div style={{ backgroundColor: '#2E57B8', padding: 50 }}>
  <Field 
    name="test-range-1"
    label="A range selector!"
  >
    <CustomRange 
      min={0}
      max={20}
      defaultValue={[3, 10]}
      onAfterChange={value => console.log(value)}
    />
  </Field>
</div>

<div style={{ backgroundColor: '#f5f4f0', padding: 50, marginTop: 16 }}>
  <CustomRange 
    min={0}
    max={20}
    defaultValue={[4, 10]}
    theme='dark'
    pushable
    onAfterChange={value => console.log(value)}
  />
</div>
```
