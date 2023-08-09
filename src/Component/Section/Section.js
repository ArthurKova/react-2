import React from 'react';
import propTypes from 'prop-types';

const Section = ({ children }) => {
  return <div>{children}</div>;
};
Section.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Section;
