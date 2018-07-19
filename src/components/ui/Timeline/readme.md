```js
const TIMELINE_ITEMS = [
  { label: '2014', value: 2014, selected: false },
  { label: '2015', value: 2015, selected: false },
  { label: '2016', value: 2016, selected: false },
  { label: '2017', value: 2017, selected: true },
  { label: '2018', value: 2018, selected: false }
];

<div style={{ margin: '45px 0' }}>
  <Timeline
    items={TIMELINE_ITEMS}
    onChange={(selected) => { console.log(selected)}}
  />
</div>
```
