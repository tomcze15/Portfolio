import { Helmet } from 'react-helmet-async';
import { FunctionComponent } from 'react';

import { IPageTitleProps } from 'common/types';

const PageTitle: FunctionComponent<IPageTitleProps> = ({
  title,
}): JSX.Element => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default PageTitle;
