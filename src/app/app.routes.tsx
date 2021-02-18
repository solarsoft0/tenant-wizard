/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SuccessPage from 'modules/successPage';
export interface TRoute {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
  modulePath?: string;
  routes?: TRoute[];
  excact?: boolean;
}

//  ================== START ROUTE CONFIGURATION ================== //
const routes: TRoute[] = [
  {
    path: '/form',
    component: lazy(() => import('../modules/tenantForm')),
  },
  {
    path: '/',
    component: lazy(() => import('../modules/welcome')),
  },
];
//  ================== END ROUTE CONFIGURATION ==================== //

/**
 * Render our routes inside a switch
 * @example <RouteConfigComponent />
 */
export default function RouteConfigComponent() {
  return (
    <Switch>
      <Route
        path="/success/:timestamp"
        render={(props) => {
          // TODO: Work on this issue asap
          // This is a work around for the route protection
          // get timestamp from route
          const timestamp = props.match.params && props.match.params.timestamp;
          // This routing should have happened is the 5 past second for the route to be valide
          // We will assume that the form might take up to 5s to route
          const isValid = timestamp > Date.now() - 5 && timestamp < Date.now();

          // If it's valid route to success page
          if (isValid) return <SuccessPage />;
          // else redirect to welcome screen
          return <Redirect to="/welcome" />;
        }}
      />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Redirect to="/welcome" />
    </Switch>
  );
}

/**
 * Used to render subroutes defined in the routes list above
 * @param {TRoute} route - Subroutes
 */
export function RouteWithSubRoutes(route: TRoute) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component {...props} routes={route.routes} path={route.modulePath || route.path} />
      )}
    />
  );
}
