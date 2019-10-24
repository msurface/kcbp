import React from 'react';
import vcpImage from '../images/vcp.jpg';
import kcbpImage from '../images/kcbp-about-us-image.jpg';
import partnerPhoto from '../images/comingHome.jpg';
import '../css/aboutUs.css';

const AboutUs = props => {
  return (
    <section className="about-us">
      <h2 className="text-center my-5">
        About KCBP & Veterans Community Project
      </h2>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg">
            <div class="media">
              <img src={kcbpImage} class="align-self-center mr-3" alt="..." />
              <div class="media-body">
                <h5 class="mt-0">Kansas City BBQ PassPort</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
                <p class="mb-0">
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 text-right">Veterans Community Project</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
                <p class="mb-0">
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </div>
              <img src={vcpImage} class="align-self-center ml-3" alt="..." />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg">
            <div class="media">
              <img
                src={partnerPhoto}
                class="align-self-center mr-3"
                alt="..."
              />
              <div class="media-body">
                <h5 class="mt-0">Our Partnership</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
                <p class="mb-0">
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
