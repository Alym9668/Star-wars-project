import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage";
import FavoritePage from "../containers/FavoritePage";
import SerchPage from "../containers/SerchPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
const routesConfig = [
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritePage
    },
    {
        path: '/fail',
        exact: true,
        component: ErrorMessage
    },
    {
        path: 'not-found',
        exact: true,
        component: NotFoundPage
    },
    {
        path: '/people/:id',
        exact: true,
        component: PersonPage
    },
    {
        path: '/search',
        exact: true,
        component: SerchPage
    },
    {
       path: '/',
       exact: true,
       component: HomePage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }

];

export default routesConfig;
