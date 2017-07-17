import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened === undefined ? false : props.opened
    };
    // Bindings
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    const cNames = classNames('c-accordion', {
      '-closed': !this.state.opened,
      [this.props.className]: this.props.className
    });
    return (
      <div className={cNames}>
        {this.props.contentPosition === 'top' &&
          <div className="accordion-content">
            {this.props.children}
          </div>
        }
        <div className="accordion-header">
          {this.props.title && <span className="accordion-title">{this.props.title}</span>}
          <button
            className="accordion-btn"
            type="button"
            onClick={this.toggle}
          >
            {this.props.toggleIcon}
          </button>
        </div>

        {this.props.contentPosition === 'bottom' &&
          <div className="accordion-content">
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

Accordion.propTypes = {
  opened: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  contentPosition: PropTypes.string,
  children: PropTypes.object,
  toggleIcon: PropTypes.object
};
