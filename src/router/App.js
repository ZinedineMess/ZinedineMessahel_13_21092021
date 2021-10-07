import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Login from 'pages/Login/Login';
import LogInJWT from 'utils/storage/LogInJWT';
import PropTypes from 'prop-types';
import React from 'react';
import { routes, routesApiDocs } from 'router/routes';
import { SubRoutes } from 'router/SubRoutes';

function App(props) {
    // to establish the path to the API documentation
    routesApiDocs();
    // to log in the user using the JWT Token
    LogInJWT();

    return (
        <div className="App">
            <Router>
                    <Header />
                    <Switch>
                        {routes.map((route, index) =>
                            !props.connected && route.private 
                            ? (
                                <Login key={index} exact path={route.path} />
                            ) : (
                                <SubRoutes key={index} {...route} />
                            )
                        )}
                    </Switch>
                    <Footer />
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        connected: state.user.connected,
    };
}

App.propTypes = {
    connected : PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(App);
