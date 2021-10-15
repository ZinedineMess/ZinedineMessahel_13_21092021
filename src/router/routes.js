import {ENV_MODE} from 'utils/constants/constants';
import Error from 'pages/Error/Error';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import SwaggerApiDoc from 'components/SwaggerApiDoc/SwaggerApiDoc';

export const routes = [{
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        private: true,
    },
    {
        path: '*',
        exact: false,
        component: Error,
    },
];

export const routesApiDocs = () => {
    // Swagger warning disable
    console.warn = () => {};

    // Push API route in dev mode
    if (ENV_MODE !== 'production') {
        routes.unshift({
            path: '/api-docs',
            exact: true,
            component: SwaggerApiDoc,
        });
    };
}
