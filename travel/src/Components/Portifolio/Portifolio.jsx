import React, { useEffect } from 'react'
import './Portifolio.css'

// Iomported Images
import image from '../../Assets/rightcontent.jpg'
import Icon1 from '../../Assets/protection.png'
import Icon2 from '../../Assets/destination.png'
import Icon3 from '../../Assets/online-chat.png'

import Aos from "aos";
import "aos/dist/aos.css";


const Portifolio = () => {

useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading" data-aos="fade-up">
            <h3>Why Should You Choose Us</h3>
            <p>Journeys Crafted with Passion and Precision.</p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Icon1} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Safety and Support</h4>
                <p>
                  We really care about your safety and comfort. That's why we've
                  set top-notch safety measures and are always here for you,
                  ready to help, every step of your trip
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Icon2} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  From local getaways to global escapades, we've got a variety
                  of destinations to match just about any taste and fancy.
                  Wherever you're dreaming of, we're on it!
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Icon3} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Got questions or need some help? Our awesome support team is
                  here for you 24/7, before, during, and after your trip. We've
                  got your back!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-up">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default Portifolio