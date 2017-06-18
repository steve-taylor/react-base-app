import React from 'react';
import PropTypes from 'prop-types';
import bemify from '../bemify';

import './PageLayout.scss';

const PageLayout = ({bem, children}) => (
  <div className={bem()}>
    {children}
  </div>
);

PageLayout.propTypes = {
  bem: PropTypes.func.isRequired,
};

export default bemify(PageLayout);
