import React from 'react';
import { HashLink } from 'react-router-hash-link';
import contact from '../../img/icon/contact.png';
import contact_border from '../../img/dashed/contact_border.png';
import link from '../../img/dashed/link.png';

const ContactLink = () => {
  return (
    <div className="contactlink">
      <h4>
        思い入れのある生地で、
        <br />
        あったらいいな♪を叶える。
      </h4>
      <div className="contactlink-text">
        <p>
          <img src={contact_border} alt="border" />
          order made for you
        </p>
      </div>
      <div className="contactlink-img">
        <div className="contactlink-content">
          <HashLink to={'/Contact/#top'}>
            contact <img className="contactlink-logo" src={contact} alt="contact" />
            <img className="contactlink-link" src={link} alt="link" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
