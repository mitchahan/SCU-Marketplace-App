import './App.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage';
import UserDetails from './test-data/UserDetails';
import ProductDetails from './test-data/ProductDetails';
import Login from './components/Login Page/Login';
import Register from './components/Login Page/Register';

function App() {
  return (
    <body>
        {/* Create the Router to be able to change between pages seamlessly*/}
        <HashRouter basename={"/"}>
          <div>
            <Navigation />
            <Switch>
              <Route path = "/" component = {HomePage} exact/>
              <Route path = "/about" component = {About}/>
              <Route path = "/user" component = {UserDetails}/>
              <Route path = "/products" component = {ProductDetails}/>
              <Route path = "/login" component = {Login}/>
              <Route path = "/register" component = {Register}/>
            </Switch>
          </div>
        </HashRouter>

      </body>
  );
}

export default App;
