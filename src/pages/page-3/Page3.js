import React from 'react';
import {func, shape} from 'prop-types';
import {withRouter} from 'react-router';
import {RoutePath, absoluteRoutePath} from '../../Routing';

import './page-3.sass';

const Page3 = ({router: {push}}) => (
  <div className="page3">
    <h1>
      Page 3
    </h1>
    <button onClick={() => push(absoluteRoutePath(RoutePath.PAGE_1))}>
      Next page
    </button>
  </div>
);

Page3.propTypes = {
  router: shape({
    push: func.isRequired,
  }).isRequired,
};

export default withRouter(Page3);
