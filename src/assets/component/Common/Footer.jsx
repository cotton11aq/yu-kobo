import React from 'react';
import { HashLink } from 'react-router-hash-link';
import right from '../../img/others/right.png';
import logo from '../../img/footer/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <ul>
          <li>
            <HashLink to={'/#top'}>home</HashLink>
          </li>
          <li>
            <HashLink to={'/About#top'}>about</HashLink>
          </li>
          <li>
            <HashLink to={'/Contact#top'}>contact</HashLink>
          </li>
          <li>
            <a href="https://yu-kobo.myshopify.com/">online shop</a>
          </li>
        </ul>
      </div>
      <div className="footer-order">
        <HashLink to={'/Contact#contact'} className="footer-contact">
          <p className="footer-contact_jp">オーダーメイドのご依頼はこちら</p>
          <p className="footer-contact_en">order made for you</p>
          <img className="footer-right" src={right} alt="arrow" />
        </HashLink>
      </div>
      <div className="footer-insta">
        <a href="https://www.instagram.com/yu_kobo/" target="_brank">
          <p>Yu-kobo Instagram</p>
          <i className="fab fa-instagram fa-3x"></i>
        </a>
      </div>
      <div className="footer-logo">
        <HashLink to={'/#top'}>
          <img src={logo} alt="logo" />{' '}
        </HashLink>
        <HashLink to={'/#top'}>
          <p>
            hand made shop
            <br />
            by yu-kobo
          </p>
        </HashLink>
      </div>
      <p className="footer-copy">©️Yu-kobo, All Right Reserved.</p>
    </div>
  );
};

export default Footer;
