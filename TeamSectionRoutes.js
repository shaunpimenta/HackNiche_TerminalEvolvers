import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const Team = Loadable(lazy(() => import('views/pages/Services')));

const TeamSectionRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/Team',
            element: <Team />
        }
    ]
};

export default TeamSectionRoutes;
