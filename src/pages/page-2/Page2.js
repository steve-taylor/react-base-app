import './Page2.scss';

import React from 'react';
import ReactRouterPropTypes from '../../util/ReactRouterPropTypes';
import {RoutePath, absoluteRoutePath} from '../../Routing';

const Page2 = ({history: {push}}) => (
  <div className="page2">
    <h1>
      Page 2
    </h1>
    <button onClick={() => push(absoluteRoutePath(RoutePath.PAGE_3))}>
      Next page
    </button>
  </div>
);

Page2.propTypes = {
  ...ReactRouterPropTypes,
};

export default Page2;
