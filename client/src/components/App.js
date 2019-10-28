import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './homepage/Home';
import HeroBox from './homepage/HeroBox';
import AboutUs from './homepage/AboutUs';
import Register from './Register';
import HowTo from './homepage/HowTo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
