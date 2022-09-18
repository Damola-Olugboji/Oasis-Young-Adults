import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="A Place Of Refuge" />
      <h1 className="app__header-h1">Oasis Young Adults Ministry.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>&quot; To Worship God Is To Humble Everything About Outselves And Exalt Everything About Him.&quot;</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
