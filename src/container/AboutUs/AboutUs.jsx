import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center" />
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Our Mission</h1>
        <p className="p__opensans"> Our Mission is to be &quot; A Place of Refuge &quot;, where young adults fellowship in Christian community. We want our members to grow stronger in their faith, and to be replenished in the word of God.  </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.cross} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Core Values</h1>
        <p className="p__opensans">- Reverence and Worship for God <br /> - Honor and Respect for one another <br /> - Transparency and Authenticity <br /> - Spiritual growth through the word <br />- Re-presenting Christ  </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
