import React from 'react';
import PropTypes from 'prop-types';
import bemify from '../bemify';

import './PageLayout.scss';

const PageLayout = ({bem, children}) => (
  <div className={bem()}>
    <header className={bem('header')}>
      <span>Sticky header</span>
    </header>
    {children || <main/>}
    <footer className={bem('footer')}>
      <span>Sticky footer</span>
    </footer>
  </div>
);

PageLayout.propTypes = {
  bem: PropTypes.func.isRequired,
};

export default bemify(PageLayout);
