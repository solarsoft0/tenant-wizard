import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { TRoute, RouteWithSubRoutes } from 'app/app.routes';

interface Props {
  routes?: TRoute[] | undefined;
}

export const DefaultLayout: React.FC<Props> = ({ routes = undefined }) => {
  return (
    <div>
      <main>
        <div>
          default layout
          <Switch>
            {routes !== undefined &&
              routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            <Redirect to="/welcome" />
          </Switch>
        </div>
      </main>
    </div>
  );
};
