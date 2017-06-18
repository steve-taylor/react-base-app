import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import bemify from '../../bemify';
import {RoutePath, absoluteRoutePath} from '../../Routing';

import './Page1.scss';

const Page1 = ({bem, history: {push}}) => (
  <div className={bem(null, {'some-modifier': true})}>
    <h1 className={bem('heading', 'another-modifier')}>
      Page 1
    </h1>
    <button className={bem('button')} onClick={() => push(absoluteRoutePath(RoutePath.PAGE_2))}>
      Next page
    </button>
  </div>
);

Page1.propTypes = {
  bem: PropTypes.func.isRequired,
  ...ReactRouterPropTypes,
};

export default bemify(Page1);
