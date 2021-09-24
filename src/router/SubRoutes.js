import { Route } from 'react-router-dom'

export function SubRoutes(route) {
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
