import Error from 'pages/Error/Error';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';

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
        path: '/user/profile',
        exact: true,
        component: Profile,
        private: true,
    },
    {
        path: '*',
        exact: false,
        component: Error,
    }
];
