import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">239 E 1st Ave, Roselle, NJ 07203</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.blackLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;To worship God is to humble everything about outselves and exalt everything about him.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <a target="_blank" rel="noreferrer" aria-label="instagram" href="https://www.instagram.com/oasis_ahow/"><FiInstagram /></a>
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Oasis. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
