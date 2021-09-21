import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import 'router/App.css';

function App() {
  return (
      <div className='App'>
        <Router>
        <Header />
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/login'>
                <LoginPage />
              </Route>
              <Route exact path='/profile'>
                <ProfilePage />
              </Route>
            </Switch>
            <Footer />
        </Router>
      </div>  
  );
}

export default App;
