import React from 'react';
import { format } from 'd3-format';
import isEqual from 'lodash/isEqual';
import capitalize from 'lodash/capitalize';

// Data
import { LEGEND_OPACITY_RANGE } from '../../../data/legend';
import { CATEGORIES, CROP_OPTIONS } from '../../../data/filters';

// Utils
import { get } from '../../../utils/request';
import { getObjectConversion } from '../../../utils/filters';

// Components
import LegendButtons from './LegendButtons';
import LegendGraph from './LegendGraph';
import Spinner from 'components/ui/spinner';


class LegendItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      layer: this.props.layer
    };

    // BINDINGS
    this.triggerAction = this.triggerAction.bind(this);
  }

  componentDidMount() {
    this.getLegendData();
  }

  componentWillReceiveProps(nextProps) {
    if (isEqual(this.props, nextProps)) return;
    const newState = {
      ...nextProps,
      loading: true
    };
    this.setState(newState, this.getLegendData);
  }

  getLegendData() {
    const { layerConfig, legendConfig } = this.state.layer;

    if (!legendConfig.sqlQuery) {
      this.setState({
        loading: false
      });
      return;
    }

    const legendConfigConverted = Object.assign({}, getObjectConversion(legendConfig, this.props.filters, 'water', legendConfig.paramsConfig, legendConfig.sqlConfig));
    const { sqlQuery } = legendConfigConverted;
    const { crop } = this.props.filters;

    get({
      url: `https://${layerConfig.account}.carto.com/api/v2/sql?q=${sqlQuery}`,
      onSuccess: (data) => {
        const buckets = data.rows[0].bucket;

        if (buckets === null || !buckets.length) {
          this.setState({
            loading: false,
            error: 'Data not available',
            layer: {
              ...this.state.layer,
              name: capitalize(crop)
            }
          });

          return;
        }


        const color = CROP_OPTIONS.find(c => c.value === crop).color;
        const items = buckets.map((bucket, i) => ({
          value: `(< ${format('.3s')(bucket)})`,
          color: this._applyOpacity(color, LEGEND_OPACITY_RANGE[i]),
          name: ''
        }));

        const newlegendConfig = {
          ...legendConfigConverted,
          ...{ items }
        };

        this.setState({
          error: null,
          loading: false,
          layer: {
            ...this.state.layer,
            legendConfig: newlegendConfig,
            name: capitalize(crop)
          }
        });
      },
      onError: (err) => {
        throw err;
      }
    });
  }

  _applyOpacity(hex, opacity) {
    // Splits in 2-length chunks the hexadecimal
    const hexArray = hex.split('#')[1].match(/.{1,2}/g);
    // Converts from hex to RGB every chunk
    const rgb = hexArray.map(h => parseInt(h, 16));

    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
  }

  triggerAction(action) {
    if (action === 'info') {
      this.props.onToggleInfo && this.props.onToggleInfo({
        layer: this.props.layer
      });
    }
  }

  render() {
    return (
      <li className="c-legend-item">
        <header className="legend-item-header">
          <h3>
            {this.state.layer.category &&
              <span className="category">{CATEGORIES[this.state.layer.category]} -</span>
            }
            <span className="name">{this.state.layer.name}</span>
          </h3>
          <LegendButtons triggerAction={this.triggerAction} />
        </header>
        {!this.state.error ?
          <LegendGraph config={this.state.layer.legendConfig} /> :
          <span className="error-message">{this.state.error}</span>
        }
        <Spinner isLoading={this.state.loading} />
      </li>
    );
  }
}

LegendItem.propTypes = {
  layer: React.PropTypes.object,
  filters: React.PropTypes.object,
  onToggleInfo: React.PropTypes.func
};

export default LegendItem;
