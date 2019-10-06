import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Breadcrumbs = ({ path }) => (
  <p className={`${path}-breadcrumbs`} style={{ marginBottom: '3rem' }}>
    <Link to="/">
      Home
    </Link>
    {' → '} 
    <Link to={`/${path.toLowerCase()}`}>
      {path.replace('/', '')}
    </Link>
  </p>
);

Breadcrumbs.propTypes = {
  path: PropTypes.string.isRequired
};

export default Breadcrumbs;
