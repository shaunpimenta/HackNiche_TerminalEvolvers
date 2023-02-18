import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const Svalue = Loadable(lazy(() => import('views/pages/SchemesInvest')));

const SchemesRoute = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/Schemes',
            element: <Svalue />
        }
    ]
};

export default SchemesRoute;
