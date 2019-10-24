import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeroBox from './HeroBox';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <HeroBox />
        <AboutUs />
      </Fragment>
    );
  }
}

export default App;
