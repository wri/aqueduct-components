import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class LegendButtons extends React.Component {

  constructor(props) {
    super(props);

    // BINDINGS
    this.triggerAction = this.triggerAction.bind(this);
  }

  triggerAction(e) {
    const action = e.currentTarget.dataset.action;
    this.props.triggerAction(action);
  }

  render() {
    return (
      <ul className="c-legend-buttons">
        <li>
          <button data-action="info" className="legend-button" onClick={this.triggerAction}>
            <Icon
              name="icon-question"
              className="-round"
            />
          </button>
        </li>
      </ul>
    );
  }
}

LegendButtons.propTypes = {
  // PROPS
  triggerAction: PropTypes.func
};


export default LegendButtons;
