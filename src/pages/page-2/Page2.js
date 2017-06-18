import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import {RoutePath, absoluteRoutePath} from '../../Routing';
import bemify from '../../bemify';

import './Page2.scss';

const Page2 = ({history: {push}, bem}) => (
  <div className={bem()}>
    <h1>
      Page 2
    </h1>
    <button onClick={() => push(absoluteRoutePath(RoutePath.PAGE_3))}>
      Next page
    </button>
  </div>
);

Page2.propTypes = {
  bem: PropTypes.func.isRequired,
  ...ReactRouterPropTypes,
};

export default bemify(Page2);
