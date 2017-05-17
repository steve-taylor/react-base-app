import React from 'react';
import {Route, Router, IndexRedirect, browserHistory} from 'react-router';
import PageLayout from './layouts/PageLayout';
import Page1 from './pages/page-1/Page1';
import Page2 from './pages/page-2/Page2';
import Page3 from './pages/page-3/Page3';
import {RoutePath, basePath, absoluteRoutePath} from './Routing';

const Routes = () => (
  <Router history={browserHistory}>

    <Route path="/">
      <Route path={basePath} component={PageLayout}>
        <Route path={RoutePath.PAGE_1} component={Page1}/>
        <Route path={RoutePath.PAGE_2} component={Page2}/>
        <Route path={RoutePath.PAGE_3} component={Page3}/>
      </Route>

      <IndexRedirect to={absoluteRoutePath(RoutePath.PAGE_1)}/>
    </Route>

    <Route path="*" component={() => <div>Not found :(</div>}/>
  </Router>
);

export default Routes;
