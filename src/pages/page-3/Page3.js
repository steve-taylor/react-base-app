import React from 'react';
import {withRouter} from 'react-router';
import {RoutePath, absoluteRoutePath} from '../../Routing';

import './page-3.sass';

const Page3 = ({router: {push}}) => (
  <div className="page3">
    <h1>
      Page 3
    </h1>
    <button onClick={push(absoluteRoutePath(RoutePath.PAGE_1))}>
      Next page
    </button>
  </div>
);

const {func, shape} = React.PropTypes;

Page3.propTypes = {
  router: shape({
    push: func.isRequired,
  }).isRequired,
};

export default withRouter(Page3);
