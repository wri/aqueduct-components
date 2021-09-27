import React from 'react';
import PropTypes from 'prop-types';

export default class InfoModal extends React.Component {
  render() {
    const notAvailable = 'Not available';

    return (
      <div className="c-info">
        <div className="info-header">
          <div className="info-titles">
            <span className="info-title">{this.props.info.title}</span>
          </div>
        </div>
        <div className="info-description">
          {this.props.info.content && (
            <div
              {...(this.props.info.contentDivProps || {})}
              dangerouslySetInnerHTML={{
                __html: this.props.info.content
              }}
            />
          )}
          <dl>
            {!this.props.omitInstructions && (
              <React.Fragment>
                <dt>Instructions:</dt>
                <dd>{this.props.info.instructions || notAvailable}</dd>
              </React.Fragment>
            )}

            {!this.props.omitDescription && (
              <React.Fragment>
                <dt>Description:</dt><br />
                <dd
                  dangerouslySetInnerHTML={{
                    __html: this.props.info.description || notAvailable
                  }}
                />
              </React.Fragment>
            )}


            {this.props.info.source && <dt>Source:</dt>}
            {this.props.info.source && (
              <dd
                dangerouslySetInnerHTML={{
                  __html: this.props.info.source || notAvailable
                }}
              />
            )}
          </dl>
        </div>
      </div>
    );
  }
}

InfoModal.propTypes = {
  info: PropTypes.object,
  omitDescription: PropTypes.bool,
  omitInstructions: PropTypes.bool,
};
