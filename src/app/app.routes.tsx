/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    path: '/success',
    component: lazy(() => import('../modules/successPage')),
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
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}

/**
 * Used to render subroutes defined in the routes list above
 * might be needed later on
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
