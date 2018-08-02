```js
const TABS_SAMPLE = [
  { label: 'Risk', value: 'risk' },
  { label: 'Hazard', value: 'hazard', default: true },
  { label: 'Cost-benefit Analyzer', value: 'cost-benefit-analyzer' }
];

<div>
  <div>
    <Tabs
      tabs={TABS_SAMPLE}
      onChange={tab => console.log(tab)}
    />
  </div>

  <div style={{ marginTop: 16 }}>
    <Tabs
      tabs={TABS_SAMPLE}
      theme="light"
      onChange={tab => console.log(tab)}
    />
  </div>
</div>
```
