```js

const customButtons = (
  <ul>
    <li>
      <button type="button" onClick={() => console.log('click share')} >
        <Icon name="share" />
      </button>
    </li>
    <li>
      <button type="button" onClick={() => console.log('click eye')}>
        <Icon name="eye" />
      </button>
    </li>
    <li>
      <button type="button" onClick={() => console.log('click download')}>
        <Icon name="download" />
      </button>
    </li> 
  </ul>
);

<div style={{ position: 'relative', minHeight: 215 }}>
  <MapControls
    onZoomChange={zoom => { console.log(zoom)}}
  >
    {customButtons}
  </MapControls>
</div>
```
