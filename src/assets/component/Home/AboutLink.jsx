import React from 'react';
import about from '../../img/icon/about.png';
import link from '../../img/dashed/link.png';
import { HashLink } from 'react-router-hash-link';

const AboutLink = () => {
  return (
    <div className="aboutlink">
      <HashLink to={'About/#top'} className="aboutlink-text">
        about Yu-kobo
        <img className="aboutlink-about" src={about} alt="about" />
        <img className="aboutlink-link" src={link} alt="link" />
      </HashLink>
    </div>
  );
};

export default AboutLink;
