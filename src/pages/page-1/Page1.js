import './Page1.scss';

import React from 'react';
import ReactRouterPropTypes from '../../util/ReactRouterPropTypes';
import bemify from '../../util/bemify';
import {RoutePath, absoluteRoutePath} from '../../Routing';

const Page1 = ({bem, history: {push}}) => (
  <div className={bem(null, {'from-page-3': false})}>
    <h1 className={bem('heading', 'from-redirect')}>
      Page 1
    </h1>
    <button className={bem('button')} onClick={() => push(absoluteRoutePath(RoutePath.PAGE_2))}>
      Next page
    </button>
  </div>
);

Page1.propTypes = {
  ...ReactRouterPropTypes,
};

export default bemify('react-app')(Page1);
