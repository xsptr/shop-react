import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}


export default App;
