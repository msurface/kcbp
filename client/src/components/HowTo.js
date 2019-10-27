import React from 'react';
import '../css/howTo.css';
import holderImg from '../images/vcp.jpg';
import HeadingTwo from './utilities/HeadingTwo';
import Paragraph from './utilities/Paragraph';

const HowTo = props => {
  const cardText = {
    cardPara1:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cardPara2:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cardPara3:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  };
  // CHANGE CARDS TO A CARD DECK
  return (
    <section className="how-to py-5">
      <HeadingTwo className="text-center mb-5" text="How To Use BBQ Passport" />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center my-2">
            <div className="card-deck">
              <div class="card" style={{ width: '18rem' }}>
                <img src={holderImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <Paragraph className="card-text" text={cardText.cardPara1} />
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
                  <Paragraph className="card-text" text={cardText.cardPara2} />
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
                  <Paragraph className="card-text" text={cardText.cardPara3} />
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
