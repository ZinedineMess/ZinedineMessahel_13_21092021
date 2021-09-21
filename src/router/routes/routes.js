import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';

export const routes = [{
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePage,
        private: true
    },
    {
        path: '*',
        exact: false,
        component: ErrorPage
    }
]
