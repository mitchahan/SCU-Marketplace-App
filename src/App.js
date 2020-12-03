import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import User from './components/User';
import Login from './components/Login Page/Login';
import Register from './components/Login Page/Register';
import ProductCreation from './components/Product Creation Page/ProductCreation';
import MyProducts from './components/MyProducts/MyProducts'
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Create the Router to be able to change between pages seamlessly*/}
        <BrowserRouter forceRefresh={true}>
          <div className="nav-container">
            <Navigation />
          </div>
          <div className="body-container">
            <Switch>
              <Route path = "/" component = {HomePage} exact/>
              <Route path = "/about" component = {About}/>
              <Route path = "/user" component = {User}/>
              <Route path = "/products" component = {MyProducts} />
              <Route path = "/login" component = {Login}/>
              <Route path = "/register" component = {Register}/>
              <Route path = "/create-product" component = {ProductCreation}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
