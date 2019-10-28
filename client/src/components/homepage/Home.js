import React, { Fragment } from 'react';
import HowTo from './HowTo';
import AboutUs from './AboutUs';
import HeroBox from './HeroBox';

const Home = props => {
  return (
    <Fragment>
      <HeroBox />
      <HowTo />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
