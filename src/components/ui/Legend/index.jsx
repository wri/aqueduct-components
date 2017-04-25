import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import LegendItem from './LegendItem';
import Icon from '../Icon';
import OnlyOn from '../Responsive';

export default class Legend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLayer: null,
      expanded: props.expanded
    };
  }

  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const layers = orderBy(this.props.layers, ['category'], ['desc']);
    return (
      <div className={`c-legend ${this.props.className} ${this.state.expanded ? '-expanded' : ''}`}>
        <OnlyOn device="desktop">
          <div>
            <div className="legend-header" onClick={() => this.toggleExpand()}>
              <span className="legend-header-title">{this.state.expanded ? 'Legend' : 'View Legend'}</span>
              <button className="legend-btn">
                <Icon name="icon-arrow-up-2" className="legend-open-icon" />
                <Icon name="icon-arrow-down-2" className="legend-close-icon" />
              </button>
            </div>
          </div>
        </OnlyOn>
        <div className="legend-content">
          <ul>
            {layers.map((layer, i) =>
              layer.category !== 'mask' &&
              <LegendItem
                filters={this.props.filters}
                layer={layer}
                key={i}
                onToggleInfo={this.props.onToggleInfo}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Legend.defaultProps = {
  layers: [],
  filters: [],
  className: '',
  expanded: false,
  onToggleInfo: null
};

Legend.propTypes = {
  layers: PropTypes.array,
  filters: PropTypes.object,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  onToggleInfo: PropTypes.func
};
