import './Page3.scss';

import React from 'react';
import ReactRouterPropTypes from '../../util/ReactRouterPropTypes';
import {RoutePath, absoluteRoutePath} from '../../Routing';

const Page3 = ({history: {push}}) => (
  <div className="page2">
    <h1>
      Page 3
    </h1>
    <button onClick={() => push(absoluteRoutePath(RoutePath.PAGE_1))}>
      Next page
    </button>
  </div>
);

Page3.propTypes = {
  ...ReactRouterPropTypes,
};

export default Page3;
