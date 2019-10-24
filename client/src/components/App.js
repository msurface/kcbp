import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeroBox from './HeroBox';
import AboutUs from './AboutUs';
import Register from './Register';
import HowTo from './HowTo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <HeroBox />
        <HowTo />
        <AboutUs />
        <Register />
      </Fragment>
    );
  }
}

export default App;
