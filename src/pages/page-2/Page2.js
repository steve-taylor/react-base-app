import React from 'react';
import {func, shape} from 'prop-types';
import {withRouter} from 'react-router';
import {RoutePath, absoluteRoutePath} from '../../Routing';

import './page-2.sass';

const Page2 = ({router: {push}}) => (
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
  router: shape({
    push: func.isRequired,
  }).isRequired,
};

export default withRouter(Page2);
