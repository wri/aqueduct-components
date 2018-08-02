```js
<div style={{ backgroundColor: '#f5f4f0', padding: 30 }}>
  <Checkbox
    label="Change Indicators and Weightings"
    name="indicators"
    value="indicators-value"
    defaultChecked
    onChange={val => console.log(val)}
  />
</div>

<div style={{ backgroundColor: '#2E57B8', padding: 30, marginTop: 16 }}>
  <Checkbox
    label="Show Advanced settings"
    name="advanced"
    value="advanced-value"
    theme="light"
    defaultChecked
    onChange={val => console.log(val)}
  />
</div>
```
