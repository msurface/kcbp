import React from 'react';
import holderImg from '../images/vcp.jpg';
import HeadingTwo from './utilities/headings/HeadingTwo';
import Paragraph from './utilities/Paragraph';
import Image from './utilities/Image';
import '../css/howTo.css';

const HowTo = props => {
  const cardInfo = {
    cardOne: {
      img: holderImg,
      cardPara:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    cardTwo: {
      img: holderImg,
      cardPara:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    cardThree: {
      img: holderImg,
      cardPara:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
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
                <Image
                  src={cardInfo.cardOne.img}
                  className="card-img-top"
                  alt="card photo"
                />
                <div class="card-body">
                  <Paragraph
                    className="card-text"
                    text={cardInfo.cardOne.cardPara}
                  />
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
                <Image
                  src={cardInfo.cardTwo.img}
                  className="card-img-top"
                  alt="card photo"
                />
                <div class="card-body">
                  <Paragraph
                    className="card-text"
                    text={cardInfo.cardTwo.cardPara}
                  />
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
                <Image
                  src={cardInfo.cardThree.img}
                  className="card-img-top"
                  alt="card photo"
                />
                <div class="card-body">
                  <Paragraph
                    className="card-text"
                    text={cardInfo.cardThree.cardPara}
                  />
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
