```js
<div style={{ backgroundColor: '#2E57B8', padding: 50 }}>
  <Field 
    name="test-range-1"
    label="A range selector!"
  >
    <CustomSlider 
      min={0}
      max={20}
      defaultValue={5}
      onAfterChange={value => console.log(value)}
    />
  </Field>
</div>

<div style={{ backgroundColor: '#f5f4f0', padding: 50, marginTop: 16 }}>
  <CustomSlider 
    min={0}
    max={20}
    defaultValue={9}
    theme='dark'
    colorful
    railStyle={{
      background: 'linear-gradient(to bottom, #b8e1fc 0%,#a9d2f3 10%,#90bae4 25%,#90bcea 37%,#90bff0 50%,#6ba8e5 51%,#a2daf5 83%,#bdf3fd 100%)'
    }}
    onAfterChange={value => console.log(value)}
  />
</div>
```
