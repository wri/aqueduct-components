import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Icon from '../Icon';

export default class RadioGroup extends React.Component {

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      selected: props.selected
    };
    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(e) {
    // Set the current selected object
    const selectedObj = this.props.items.find(item =>
        item.value.toString() === e.currentTarget.value);

    this.setState({ selected: selectedObj.value.toString() });

    if (this.props.onChange) this.props.onChange(selectedObj);
  }

  render() {
    const { name, items, onInfo, iconClass } = this.props;
    const { selected } = this.state;
    const className = classnames({
      [this.props.className]: !!this.props.className
    });
    const infoIconClass = classnames(
      '-info',
      { [iconClass]: !!iconClass }
    );

    return (
      <div className={`c-radio-box ${className}`}>
        {items.map((item, i) => (
          <div className="radio-container">
            <div key={i} className={`c-radio ${className}`}>
              <input
                type="radio"
                name={name}
                id={`radio-${name}-${item.value}`}
                value={item.value}
                checked={item.value.toString() === selected}
                onChange={this.onChange}
              />
              <label htmlFor={`radio-${name}-${item.value}`}>
                <span />
                {item.label}
              </label>
            </div>
            {onInfo && (
              <button
                type="button"
                className="icon-container"
                onClick={() => { onInfo(item); }}
              >
                <Icon
                  name="icon-question"
                  className={infoIconClass}
                />
              </button>)}
          </div>
        ))}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onInfo: PropTypes.func,
  iconClass: PropTypes.oneOf(['-primary', '-secondary'])
};

RadioGroup.defaultProps = {
  onInfo: null,
  iconClass: '-primary'
};
