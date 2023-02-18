import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import TeamSectionRoutes from './TeamSectionRoutes';
import SchemesRoute from './SchemesRoute';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, TeamSectionRoutes, SchemesRoute]);
}
