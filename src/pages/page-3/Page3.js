import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import {RoutePath, absoluteRoutePath} from '../../Routing';
import bemify from '../../bemify';

import './Page3.scss';

const Page3 = ({history: {push}, bem}) => (
  <div className={bem()}>
    <h1>
      Page 3
    </h1>
    <button onClick={() => push(absoluteRoutePath(RoutePath.PAGE_1))}>
      Next page
    </button>
  </div>
);

Page3.propTypes = {
  bem: PropTypes.func.isRequired,
  ...ReactRouterPropTypes,
};

export default bemify(Page3);
