import Error from 'pages/Error/Error';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import { Route } from 'react-router-dom';
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

export const MatchedRoutes = (route) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (<route.component {...props} routes={route.routes} /> )}
        />
    );
}

export const routesApiDocs = () => {
    // Swagger warning disable
    console.warn = () => {};

    // Push API route in dev mode
    if (process.env.NODE_ENV !== 'production') {
        routes.unshift({
            path: '/api-docs',
            exact: true,
            component: SwaggerApiDoc,
        });
    };
}
