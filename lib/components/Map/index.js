'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _leaflet = require('leaflet/dist/leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _Spinner = require('../ui/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */

var MAP_CONFIG = {
  zoom: 2,
  minZoom: 2,
  latLng: {
    lat: 30,
    lng: -120
  },
  zoomControl: true
};

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
      this.map = _leaflet2.default.map(this.mapNode, {
        minZoom: MAP_CONFIG.minZoom,
        zoom: this.props.mapConfig.zoom,
        zoomControl: isNaN(this.props.mapConfig.zoomControl) ? MAP_CONFIG.zoomControl : this.props.mapConfig.zoomControl,
        center: [this.props.mapConfig.latLng.lat, this.props.mapConfig.latLng.lng],
        detectRetina: true,
        scrollWheelZoom: !!this.props.mapConfig.scrollWheelZoom
      });

      if (this.props.mapConfig.bounds) {
        this.fitBounds(this.props.mapConfig.bounds.geometry);
      }

      // SETTERS
      this.setAttribution();
      this.setZoomControl();
      this.setBasemap();
      this.setMapEventListeners();

      // Add layers
      this.setLayerManager();
      this.addLayers(this.props.layersActive, this.props.filters);
      if (this.props.layersActive.length && this.props.filters.food !== 'none') {
        var foodLayer = this.props.layersActive.find(function (l) {
          return l.category === 'food';
        });

        if (foodLayer) {
          this.addMarkers(foodLayer.id, { nextZoom: this.props.mapConfig.zoom });
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.mapConfig.bounds && nextProps.mapConfig.bounds.id) {
        var sidebarWidth = nextProps.sidebar && nextProps.sidebar.width ? nextProps.sidebar.width : 0;

        if (this.props.mapConfig.bounds && this.props.mapConfig.bounds.id !== nextProps.mapConfig.bounds.id) {
          this.fitBounds(nextProps.mapConfig.bounds.geometry, sidebarWidth || 0);
        } else if (!this.props.mapConfig.bounds) {
          this.fitBounds(nextProps.mapConfig.bounds.geometry, sidebarWidth || 0);
        }
      }

      if (nextProps.sidebar && this.props.sidebar && this.props.mapConfig.bounds) {
        if (nextProps.sidebar.width !== this.props.sidebar.width) {
          this.fitBounds(this.props.mapConfig.bounds.geometry, nextProps.sidebar.width || 0);
        }
      }

      var filtersChanged = !(0, _isEqual2.default)(nextProps.filters, this.props.filters);
      var layersActiveChanged = !(0, _isEqual2.default)(nextProps.layersActive, this.props.layersActive);
      if (filtersChanged || layersActiveChanged) {
        this.removeLayers();
        this.addLayers(nextProps.layersActive, nextProps.filters);
      }

      // Zoom
      if (this.props.mapConfig.zoom !== nextProps.mapConfig.zoom) {
        this.map.setZoom(nextProps.mapConfig.zoom);
      }

      if (nextProps.layersActive.length && this.props.filters.food !== 'none' && this.props.mapConfig.zoom !== nextProps.mapConfig.zoom) {
        var foodLayer = nextProps.layersActive.find(function (l) {
          return l.category === 'food';
        });

        if (foodLayer) {
          this.addMarkers(foodLayer.id, {
            prevZoom: this.props.mapConfig.zoom,
            nextZoom: nextProps.mapConfig.zoom
          });
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var loadingChanged = this.state.loading !== nextState.loading;
      var sidebarWidthChanged = this.props.sidebar ? +this.props.sidebar.width !== +nextProps.sidebar.width : false;
      return loadingChanged || sidebarWidthChanged;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      // Remember to remove the listeners before removing the map
      // or they will stay in memory
      if (this.props.setMapParams) this.removeMapEventListeners();
      this.map.remove();
    }

    // SETTERS

  }, {
    key: 'setLayerManager',
    value: function setLayerManager() {
      var _this2 = this;

      var stopLoading = function stopLoading() {
        // Don't execute callback if component has been unmounted
        if (_this2._mounted) {
          _this2.setState({
            loading: false
          });
        }
      };

      this.layerManager = new this.props.LayerManager(this.map, {
        onLayerAddedSuccess: stopLoading,
        onLayerAddedError: stopLoading
      });
    }
  }, {
    key: 'setAttribution',
    value: function setAttribution() {
      this.map.attributionControl.addAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>');
    }
  }, {
    key: 'setZoomControl',
    value: function setZoomControl() {
      if (this.map.zoomControl) this.map.zoomControl.setPosition('topright');
    }
  }, {
    key: 'setBasemap',
    value: function setBasemap() {
      this.tileLayer = _leaflet2.default.tileLayer(config.BASEMAP_TILE_URL, {}).addTo(this.map).setZIndex(0);

      this.labelLayer = _leaflet2.default.tileLayer(config.BASEMAP_LABEL_URL, {}).addTo(this.map).setZIndex(1000);
    }

    // GETTERS

  }, {
    key: 'getMapParams',
    value: function getMapParams() {
      var params = {
        zoom: this.getZoom(),
        latLng: this.getCenter()
      };
      return params;
    }

    // MAP FUNCTIONS

  }, {
    key: 'getCenter',
    value: function getCenter() {
      return this.map.getCenter();
    }
  }, {
    key: 'getZoom',
    value: function getZoom() {
      return this.map.getZoom();
    }

    // MAP LISTENERS

  }, {
    key: 'setMapEventListeners',
    value: function setMapEventListeners() {
      function mapChangeHandler() {
        // Dispatch the action to set the params
        this.props.setMapParams(this.getMapParams());
      }

      if (this.props.setMapParams) {
        this.map.on('zoomend', mapChangeHandler.bind(this));
        this.map.on('dragend', mapChangeHandler.bind(this));
      }
    }
  }, {
    key: 'removeMapEventListeners',
    value: function removeMapEventListeners() {
      this.map.off('zoomend');
      this.map.off('dragend');
    }
  }, {
    key: 'addMarkers',
    value: function addMarkers(layerId, zoomLevels) {
      var layerConfig = {
        id: layerId
      };

      this.layerManager._setMarkers(layerConfig, zoomLevels);
    }

    // LAYER METHODS

  }, {
    key: 'addLayer',
    value: function addLayer(layer, filters) {
      this.setState({
        loading: true
      });
      this.layerManager.addLayer(layer, filters || this.props.filters);
    }
  }, {
    key: 'addLayers',
    value: function addLayers(layers, filters) {
      var _this3 = this;

      if (!layers) return;
      layers.forEach(function (layer) {
        _this3.addLayer(layer, filters);
      });
    }
  }, {
    key: 'removeLayer',
    value: function removeLayer(layer) {
      this.layerManager.removeLayer(layer.id);
    }
  }, {
    key: 'removeLayers',
    value: function removeLayers() {
      this.layerManager.removeLayers();
    }
  }, {
    key: 'fitBounds',
    value: function fitBounds(geoJson, sidebarWidth) {
      var geojsonLayer = _leaflet2.default.geoJson(geoJson);
      this.map.fitBounds(geojsonLayer.getBounds(), {
        paddingTopLeft: [sidebarWidth || 0, 0],
        paddingBottomRight: [0, 0]
      });
    }

    // RENDER

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'c-map' },
        this.state.loading && _react2.default.createElement(_Spinner2.default, { className: '-map', isLoading: true }),
        _react2.default.createElement('div', { ref: function ref(node) {
            _this4.mapNode = node;
          }, className: 'map-leaflet' })
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

Map.propTypes = {
  // STORE
  mapConfig: _propTypes2.default.object,
  filters: _propTypes2.default.object,
  sidebar: _propTypes2.default.object,
  LayerManager: _propTypes2.default.func,
  layersActive: _propTypes2.default.array,
  // ACTIONS
  setMapParams: _propTypes2.default.func
};

Map.defaultProptypes = {
  layersActive: []
};

exports.default = Map;