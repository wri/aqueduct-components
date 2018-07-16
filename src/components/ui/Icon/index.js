import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

export class Icon extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    name: '',
    className: ''
  };

  render() {
    const { name, className } = this.props;
    const classNames = classnames({ [className]: !!className });

    return (
      <svg className={`c-icon ${classNames}`}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
}

export default Icon;
