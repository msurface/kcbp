import React from 'react';
import Button from './utilities/Button';

const HeroBox = props => {
  return (
    //  to center apply d-flex to the parent "Jumbotron element"
    <div className="jumbotron hero-box d-flex" style={{ height: '100vh' }}>
      {/* finish centering by adding my-auto to the container div  */}
      <div className="container my-auto mt-5">
        <h1 className="display-4 text-center mb-3">Kansas City BBQ Passport</h1>
        <p className="lead text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero-box_btn text-center">
          <Button text="Call To Action" btnColor="success" />
          <Button text="How To" btnColor="secondary" />
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
