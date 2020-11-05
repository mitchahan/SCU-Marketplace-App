import './App.css';
import About from './components/About';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage';
import UserDetails from './test-data/UserDetails';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <body>
        {/* create the Router to be able to change between pages seamlessly*/}
        <HashRouter basename={"/"}>
          <div>
            <Navigation />
            <Switch>
              <Route path = "/" component = {HomePage} exact/>
              <Route path = "/about" component = {About}/>
              <Route path = "/user" component = {UserDetails}/>
            </Switch>
          </div>
        </HashRouter>
        
      </body>
  );
}

export default App;

