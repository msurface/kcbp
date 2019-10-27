import React from 'react';
import vcpImage from '../images/vcp.jpg';
import kcbpImage from '../images/kcbp-about-us-image.jpg';
import partnerPhoto from '../images/comingHome.jpg';
import HeadingTwo from './utilities/HeadingTwo';
import Paragraph from './utilities/Paragraph';
import HeadingFive from './utilities/HeadingFive';
import '../css/aboutUs.css';

const AboutUs = props => {
  const aboutUsInfo = {
    cardOne: {
      h5: 'Kansas City BBQ PassPort',
      Para1:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purusodio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc acnisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      Para2:
        'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus magnis dis parturient montes, nascetur ridiculus mus.'
    },
    cardTwo: {
      h5: 'Veterans Community Project',
      Para1:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purusodio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc acnisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      Para2:
        'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus magnis dis parturient montes, nascetur ridiculus mus.'
    },
    cardThree: {
      h5: 'Our Partnership',
      Para1:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purusodio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc acnisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      Para2:
        'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus magnis dis parturient montes, nascetur ridiculus mus.'
    }
  };

  return (
    <section className="about-us py-5">
      <HeadingTwo
        text="About KCBP & Veterans Community Project"
        className="text-center my-5"
      />
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-lg">
            <div className="media">
              <img
                src={kcbpImage}
                className="align-self-center mr-3"
                alt="..."
              />
              <div className="media-body">
                <HeadingFive className="mt-0" text={aboutUsInfo.cardOne.h5} />
                <Paragraph text={aboutUsInfo.cardOne.Para1} />
                <Paragraph className="mb-0" text={aboutUsInfo.cardOne.Para2} />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg">
            <div className="media">
              <div className="media-body">
                <HeadingFive
                  className="mt-0 text-right"
                  text={aboutUsInfo.cardTwo.h5}
                />
                <Paragraph text={aboutUsInfo.cardTwo.Para1} />
                <Paragraph className="mb-0" text={aboutUsInfo.cardTwo.Para2} />
              </div>
              <img
                src={vcpImage}
                className="align-self-center ml-3"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg">
            <div className="media">
              <img
                src={partnerPhoto}
                className="align-self-center mr-3"
                alt="..."
              />
              <div className="media-body">
                <HeadingFive className="mt-0" text={aboutUsInfo.cardThree.h5} />
                <Paragraph text={aboutUsInfo.cardThree.Para1} />
                <Paragraph className="mb-0" text={aboutUsInfo.cardTwo.Para2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
