import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import throttle from 'lodash/throttle';

export default class Sticky extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSticked: this.props.isSticked
    };
  }

  componentDidMount() {
    this._setVars();
    this._setEventListeners();
  }

  componentWillUnmount() {
    this.ScrollElem.removeEventListener('scroll', this.throttledScroll);
  }

  _setVars() {
    this.ScrollElem = this.props.ScrollElem ?
      document.querySelector(this.props.ScrollElem) : window;

    this.throttledScroll = throttle(() => this._onScroll(), 50);
  }

  _setEventListeners() {
    this.ScrollElem.addEventListener('scroll', this.throttledScroll);
  }

  _onScroll() {
    const currentScroll = this.ScrollElem.scrollTop;

    if (this.props.bottomLimit) {
      if (currentScroll >= this.props.topLimit && currentScroll < this.props.bottomLimit
        && this.state.isSticked === false) {
        this.setState({ isSticked: true }, () => {
          this.props.onStick && this.props.onStick(this.state.isSticked);
        });
      }

      if (currentScroll >= this.props.bottomLimit && this.state.isSticked === true) {
        this.setState({ isSticked: false }, () => {
          this.props.onStick && this.props.onStick(this.state.isSticked);
        });
      }
    } else {
      if (currentScroll >= this.props.topLimit && this.state.isSticked === false) {
        this.setState({ isSticked: true }, () => {
          this.props.onStick && this.props.onStick(this.state.isSticked);
        });
      }
      if (currentScroll < this.props.topLimit && this.state.isSticked === true) {
        this.setState({ isSticked: false }, () => {
          this.props.onStick && this.props.onStick(this.state.isSticked);
        });
      }
    }
  }

  render() {
    return (
      <div
        className={classnames('c-sticky', this.props.className,
          { [this.props.customFixedClassName]: this.state.isSticked })}
      >
        {this.props.children}
      </div>
    );
  }
}

Sticky.defaultProps = {
  customFixedClassName: '-sticked',
  isSticked: false
};

Sticky.propTypes = {
  bottomLimit: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.any,
  customFixedClassName: PropTypes.string,
  isSticked: PropTypes.bool,
  onStick: PropTypes.func,
  ScrollElem: PropTypes.string,
  topLimit: PropTypes.number
};
