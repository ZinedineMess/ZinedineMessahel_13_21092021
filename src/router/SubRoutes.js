import React from 'react';
import { Route } from 'react-router-dom';

export const SubRoutes = (route) => {
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
