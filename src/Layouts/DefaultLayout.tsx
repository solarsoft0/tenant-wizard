import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { TRoute, RouteWithSubRoutes } from 'app/app.routes';

const MainWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1000px;

  font-family: ${({ theme }) => theme.fonts[0]};
  background-color: ${({ theme }) => theme.colors.white};
`;

interface Props {
  routes?: TRoute[] | undefined;
}

export const DefaultLayout: React.FC<Props> = ({ routes = undefined }) => {
  return (
    <MainWrapper>
      <Switch>
        {routes !== undefined &&
          routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        <Redirect to="/welcome" />
      </Switch>
    </MainWrapper>
  );
};
