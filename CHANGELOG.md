# Changelog

## [1.0.0] - 2018-07-23
- Removed the next components:
  - Map
  - Legend
  - Country select
  - Responsive
  - Segmented UI
  - Sticky
  - Share button
  - Dropdown button
- Added map section.

### Accordion
This component is not available anymore.

### Header
- Changed to current component structure.
- Accepts an `app` property to set the current tool in the tool header.
- Accepts `children` to populate menu.

### Zoom Controls
- To use zoom controls now you need to export `MapControls` component.
- `onZoomChange` property is now mandatory.

### Map Controls
- Instead of rendering just a `children`, now it renders `ZoomControls` (optional) and `children`.
- Added `showZoomControls` property to control zoom controls visibility.
- `onZoomChange` property is now mandatory. It passes to `ZoomControls`.


## [1.0.0] - 2018-07-19
### Icon
- Changed to current component structure.
- `name` property is now mandatory.
- Added a new optional `prefix` property.

### Spinner
- Changed to current component structure.
- Removed `isLoading` property. Use external conditions to render or not the component instead.

### Sidebar
- Changed to current component structure.
- Renamed `opened` property to visible.
- `setSidebarWidth` property is not supported anymore.
- Added new `onToggle` property.
- Made component stateless.

### Timeline
- Changed to current component structure.
- Removed `selected` property. Now this value is get it from the `items` property.
- Made data input more consistent with a new propType definition.

### Checkbox
- Moved from `components/ui` to `components/form`.
- Changed to current component structure.
- `onChange` function now returns an object with ` { label, value, checked }` attributes, previously it only returned `{ value, checked }`.
- Made `name`, `label`, `value` propTypes mandatory.

### Checkbox group
- Moved from `components/ui` to `components/form`.
- Changed to current component structure.
- Made component stateless.
- Better PropTypes definition.
- `onChange` function doesn't return an array of selected values (`["2", "3"]`) anymore instead it returns the checked `item` objects defined in PropTypes.


