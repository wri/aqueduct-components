import React from 'react';

export default function SourceModal(props) {
  const { layer } = props;

  const notAvailable = '-';

  return (
    <div className="c-info">
      <div className="info-header">
        <div className="info-titles">
          <span className="info-title">{layer.name}</span>
          <span className="info-subtitle">{layer.subtitle}</span>
        </div>
      </div>
      <div className="info-description">
        <dl>
          <dt>Description:</dt>
          <dd>{(layer.metadata && layer.metadata.description) ? layer.metadata.description : notAvailable}</dd>
          <dt>Language:</dt>
          <dd>{(layer.metadata && layer.metadata.language) ? layer.metadata.language : notAvailable}</dd>
          <dt>Source:</dt>
          <dd>{(layer.metadata && layer.metadata.source) ? layer.metadata.source : notAvailable}</dd>
          <dt>Citation:</dt>
          <dd>{(layer.metadata && layer.metadata.citation) ? layer.metadata.citation : notAvailable}</dd>
          <dt>License:</dt>
          <dd>{(layer.metadata && layer.metadata.license) ? layer.metadata.license : notAvailable}</dd>
        </dl>
      </div>
    </div>
  );
}

SourceModal.propTypes = {
  layer: React.PropTypes.object
};
