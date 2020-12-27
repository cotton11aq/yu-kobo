import React from 'react';
import { HashLink } from 'react-router-hash-link';
import home from '../../img/icon/home.png';
import about from '../../img/icon/about.png';
import contact from '../../img/icon/contact.png';
import shop from '../../img/icon/shop.png';

const Header = (props) => {
  return (
    <div className="header" id="pctop">
      <ul>
        <li>
          <HashLink to={'/#top'}>
            <img src={home} alt="home" />
            <p>home</p>
          </HashLink>
        </li>
        <li>
          <HashLink to={'/About#top'}>
            <img src={about} alt="about" />
            <p>about</p>
          </HashLink>
        </li>
        <li>
          <HashLink to={'/Contact#top'}>
            <img src={contact} alt="contact" />
            <p>contact</p>
          </HashLink>
        </li>
        <li>
          <a href="https://yu-kobo.myshopify.com/">
            <img src={shop} alt="shop" />
            <p className="header-shop">shop</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
