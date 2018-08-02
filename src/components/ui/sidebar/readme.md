```js
  // this example won't work because the component is stateless
  // so there is no way to update its props without a React environment
  const visible = true;

  <div style={{ overflow: 'hidden', minHeight: 55 }}>
    <Sidebar
      visible={visible}
      onToggle={nextVisible => { console.log(nextVisible)} }
    >
      <div style={{ padding: 10 }}>
        Sidebar content
      </div>
    </Sidebar>
  </div>
```
