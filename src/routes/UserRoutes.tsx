import { User } from '../pages/User';
import { Listing } from '../pages/User/Listing';
import { Register } from '../pages/User/Register';

import { RouteProps } from './RouteProps';

export const UserRoutes: RouteProps = {
  path: 'user',
  element: <User />,
  children: [
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'listing',
      element: <Listing />
    }
  ]
};
