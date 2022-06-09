import { FunctionComponent } from 'react';
import { Routes as MainRoutes, Route } from 'react-router-dom';
import { Home, Experience, Accomplishment, Contact, Page404 } from 'components';
import { OPTIONS_HREF } from 'constants/items';

const Routes: FunctionComponent = (): JSX.Element => (
  <MainRoutes>
    <Route element={<Home />} path={OPTIONS_HREF.HOME} />
    <Route element={<Experience />} path={OPTIONS_HREF.EXPERIENCE} />
    <Route element={<Accomplishment />} path={OPTIONS_HREF.ACCOMPLISHMENT} />
    <Route element={<Contact />} path={OPTIONS_HREF.CONTACT} />
    <Route element={<Page404 />} path={OPTIONS_HREF.UNKNOWN} />
  </MainRoutes>
);

export default Routes;
