import React from 'react';
import PropTypes from 'prop-types';

export default function InfoModal(props) {
  const notAvailable = 'Not available';
  return (
    <div className="c-info">
      <div className="info-header">
        <div className="info-titles">
          <span className="info-title">{props.info.title}</span>
        </div>
      </div>
      <div className="info-description">
        <dl>
          <dt>Instructions:</dt>
          <dd>{props.info.instructions || notAvailable}</dd>
          <dt>Description:</dt><br />
          <dd dangerouslySetInnerHTML={{ __html: props.info.description || notAvailable }} />
          <dt>Citation:</dt>
          <dd>{props.info.citation || notAvailable}</dd>
        </dl>
      </div>
    </div>
  );
}

InfoModal.propTypes = {
  info: PropTypes.object
};
