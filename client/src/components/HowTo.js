import React from 'react';
import '../css/howTo.css';
import holderImg from '../images/vcp.jpg';

const HowTo = props => {
  // CHANGE CARDS TO A CARD DECK
  return (
    <section className="how-to py-5">
      <h2 className="text-center mb-5">How To Use BBQ Passport</h2>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center my-2">
            <div className="card-deck">
              <div class="card" style={{ width: '18rem' }}>
                <img src={holderImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center my-2">
            <div className="card-deck">
              <div class="card" style={{ width: '18rem' }}>
                <img src={holderImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center my-2">
            <div className="card-deck">
              <div class="card" style={{ width: '18rem' }}>
                <img src={holderImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
