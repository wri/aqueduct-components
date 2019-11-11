import React from 'react';
import PropTypes from 'prop-types';

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

          {layer.metadata && layer.metadata.info && layer.metadata.info.sources &&
            <dt>Source:</dt>
          }
          {layer.metadata && layer.metadata.info && layer.metadata.info.sources &&
            <dd>
              {layer.metadata.info.sources.map((s, i) => {
                if (s['source-url']) {
                  return (
                    <span>
                      {i !== 0 && ', '}
                      <a
                        key={s['source-name']}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={s['source-url']}
                      >
                        {s['source-name']}
                      </a>
                    </span>
                  );
                }

                return (
                  <span>
                    {i !== 0 && ', '}
                    {s['source-name']}
                  </span>
                );
              })}
            </dd>
          }

        </dl>
      </div>
    </div>
  );
}

SourceModal.propTypes = {
  layer: PropTypes.object
};
