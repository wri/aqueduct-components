```js
const widgetState = {
  data: [],
  loading: false,
  error: null
};

<div>
  <div style={{ backgroundColor: '#f5f4f0', padding: '0 30px 30px 30px' }}>
    <Widget
      params={{ id: '12345abc' }}
      title="Annual Total Costs vs benefits From 2010 through 2080"
      getWidgetData={()=> console.info('fetchs widget data')}
      onDownloadWidget={(value, widget) => console.log(value, widget)}
    >
      {() => {
        const { data } = widgetState;
        // render your widget here based on its state
      }}
    </Widget>
  </div>
  <div style={{ backgroundColor: '#2E57B8', padding: '0 30px 30px 30px', marginTop: 16 }}>
    <Widget
      theme="light"
      params={{ id: '5678zxc' }}
      title="Annual Total Costs vs benefits From 2010 through 2080"
      getWidgetData={()=> console.info('fetchs widget data')}
      onDownloadWidget={(value, widget) => console.log(value, widget)}
    >
      {() => {
        const { data } = widgetState;
        // render your widget here based on its state
      }}
    </Widget>
  </div>
</div>

```
