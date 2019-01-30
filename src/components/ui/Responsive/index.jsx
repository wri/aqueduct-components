import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const BREAKPOINT_MOBILE = 640;

export default function OnlyOn(props) {
  const breakpoints = {
    mobile: `(max-width: ${BREAKPOINT_MOBILE}px)`,
    desktop: `(min-width: ${BREAKPOINT_MOBILE + 1}px)`
  };
  return (
    <MediaQuery query={breakpoints[props.device]}>
      {props.children}
    </MediaQuery>
  );
}

OnlyOn.propTypes = {
  // STORE
  children: PropTypes.object,
  device: PropTypes.string.isRequired
};
