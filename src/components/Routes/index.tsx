import { FunctionComponent } from 'react';
import { Routes as MainRoutes, Route } from 'react-router-dom';
import { Home, Experience, Accomplishment, Contact, Page404 } from 'components';
import { ROUTES_HREF } from 'constants/items';

const Routes: FunctionComponent = (): JSX.Element => (
  <MainRoutes>
    <Route element={<Home />} path={'/portfolio'} />
    <Route element={<Home />} path={ROUTES_HREF.HOME} />
    <Route element={<Experience />} path={ROUTES_HREF.EXPERIENCE} />
    <Route element={<Accomplishment />} path={ROUTES_HREF.ACCOMPLISHMENT} />
    <Route element={<Contact />} path={ROUTES_HREF.CONTACT} />
    <Route element={<Page404 />} path={ROUTES_HREF.UNKNOWN} />
  </MainRoutes>
);

export default Routes;
