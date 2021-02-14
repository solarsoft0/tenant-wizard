/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DefaultLayout from 'Layouts';

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
    path: '/welcome',
    component: lazy(() => import('../modules/welcome')),
  },
  {
    path: '/',
    component: DefaultLayout,
    excact: true,
    routes: [
      {
        path: '/personal',
        component: lazy(() => import('../modules/tenantForm')),
      },
    ],
  },
];
//  ================== END ROUTE CONFIGURATION ==================== //

export default function RouteConfigComponent() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Redirect to="/welcome" />
    </Switch>
  );
}

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
