import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import 'router/App.css';

function App() {
  return (
      <div className='App'>
        <Router>
          <Header />
          <main>
            <Switch>

              <Route exact path='/'>
                <HomePage />
              </Route>

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
