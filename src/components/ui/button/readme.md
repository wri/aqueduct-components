```js
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
  <div style={{ padding: 15, backgroundColor: '#f5f4f0' }}>
    <Button
      onClick={tab => console.log('click')}
    >
      This is a button with dark theme
    </Button>
  </div>
  <div style={{ marginLeft: 16, backgroundColor: '#2146A5', padding: 15 }}>
    <Button
      theme="light"
      onClick={tab => console.log('click')}
    >
      This is a button with light theme
    </Button>
  </div>
  <div style={{ marginLeft: 16, backgroundColor: '#2E57B8', padding: 15 }}>
    <Button
      theme="blue"
      className="-bg-white"
      onClick={tab => console.log('click')}
    >
      This is a button with blue theme
    </Button>
  </div>

  <div style={{ marginTop: 16, backgroundColor: '#f5f4f0', padding: 15 }}>
    <Button
      theme="light"
      className="-large -bg-dark-blue -uppercase -bold"
      onClick={tab => console.log('click')}
    >
      This is a button with light theme
    </Button>
  </div>
  <div style={{ marginTop: 16, marginLeft: 16, backgroundColor: '#2E57B8', padding: 15, fill: '#2146A5' }}>
    <Button
      theme="blue"
      className="-bg-white"
      onClick={tab => console.log('click')}
    >
      <Icon name="share" />
      Share
    </Button>
  </div>
</div>
```
