import React from 'react';
import { Top, Form, Header } from '../index';

const Contact = () => {
  return (
    <>
      <Header id={'contact'} />
      <Top className={'top-content top-content03'} />
      <div className="contact" id="contact">
        <div className="contact-title">
          <h3>contact</h3>
        </div>
        <div className="contact-text">
          <p>
            ご予約・お問い合わせは
            <br />
            下記のフォームよりお願いいたします。
            <br />
            内容を確認させていただき、
            <br />
            改めてこちらからメールまたはお電話にて
            <br />
            ご連絡いたします。
          </p>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Contact;
