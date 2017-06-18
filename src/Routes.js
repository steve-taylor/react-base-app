import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Page1 from './pages/page-1/Page1';
import Page2 from './pages/page-2/Page2';
import Page3 from './pages/page-3/Page3';
import {RoutePath, basePath, absoluteRoutePath} from './Routing';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={basePath} render={() => (
          <PageLayout>
            <Switch>
              <Route path={absoluteRoutePath(RoutePath.PAGE_1)} component={Page1}/>
              <Route path={absoluteRoutePath(RoutePath.PAGE_2)} component={Page2}/>
              <Route path={absoluteRoutePath(RoutePath.PAGE_3)} component={Page3}/>
            </Switch>
          </PageLayout>
        )}/>

        {/* Redirect root path to page 1 */}
        <Route exact path="/" render={() => <Redirect to={absoluteRoutePath(RoutePath.PAGE_1)}/>}/>

        {/* Default case: Page not found */}
        <Route render={() => <div>Not found :(</div>}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
