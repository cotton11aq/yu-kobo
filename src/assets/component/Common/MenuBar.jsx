import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about from '../../img/icon/about.png';
import contact from '../../img/icon/contact.png';
import shop from '../../img/icon/shop.png';

const MenuBar = () => {
  return (
    <>
      <ul className="menubar">
        <li>
          <HashLink to={'/#top'}>
            <i className="menubar-home">
              <img src={about} alt="home" />
            </i>
            <br />
            <span className="menubar-text">Home</span>
          </HashLink>
        </li>
        <li>
          <HashLink to={'/About#top'}>
            <i className="menubar-home">
              <img src={about} alt="about" />
            </i>
            <br />
            <span className="menubar-text">about</span>
          </HashLink>
        </li>
        <li className="menubar-width-max">
          <HashLink to={'/Contact#top'}>
            <i className="menubar-list">
              <img src={contact} alt="concept" />
            </i>
            <br />
            <span className="menubar-text">contact</span>
          </HashLink>
        </li>
        <li>
          <a href="https://yu-kobo.myshopify.com/">
            <i className="menubar-hatenablog">
              <img src={shop} alt="shop" />
            </i>
            <br />
            <span className="menubar-text menubar-text_last">shop</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default MenuBar;
