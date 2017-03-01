import findIndex from 'lodash/findIndex';
import React from 'react';

export default class Timeline extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    // BINDINGS
    this.onClick = this.onClick.bind(this);
  }

  /**
   * UI EVENTS
   * - onChange
   * - onDrag
  */
  onClick(e) {
    // Send object
    const index = findIndex(this.props.items, { value: e.currentTarget.dataset.value });
    this.props.onChange(this.props.items[index]);
  }

  render() {
    const { items, selected } = this.props;
    const cNames = ['c-timeline'];
    if (this.props.className) {
      cNames.push(this.props.className);
    }
    return (
      <div className={cNames.join(' ')}>
        <ul className="timeline-list">
          {items.map((item, index) => {
            const selectedClass = (selected.value === item.value) ? '-selected' : '';
            return (
              <li className={`timeline-list-item ${selectedClass} ${this.props.className}`} key={index} data-value={item.value} onClick={this.onClick}>
                <div className="timeline-label">
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Timeline.propTypes = {
  items: React.PropTypes.array.isRequired,
  selected: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func,
  className: React.PropTypes.string
};
