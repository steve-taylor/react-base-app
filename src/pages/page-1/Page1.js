import React from 'react';
import {func, shape} from 'prop-types';
import {withRouter} from 'react-router';
import {RoutePath, absoluteRoutePath} from '../../Routing';

import './page-1.sass';

const Page1 = ({router: {push}}) => (
  <div className="page1">
    <h1>
      Page 1
    </h1>
    <button onClick={() => push(absoluteRoutePath(RoutePath.PAGE_2))}>
      Next page
    </button>
  </div>
);

Page1.propTypes = {
  router: shape({
    push: func.isRequired,
  }).isRequired,
};

export default withRouter(Page1);
