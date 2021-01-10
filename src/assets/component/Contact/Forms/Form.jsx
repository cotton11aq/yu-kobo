import React, { useState, useCallback } from 'react';
import { Input, TextArea } from '../../index';
import submit from '../../../img/others/submit.png';

const FormDialog = (props) => {
  const [name, setName] = useState('');
  const [furigana, setFurigana] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [postalcode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [content, setContent] = useState('');

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputFurigana = useCallback(
    (event) => {
      setFurigana(event.target.value);
    },
    [setFurigana]
  );

  const inputTel = useCallback(
    (event) => {
      setTel(event.target.value);
    },
    [setTel]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPostalCode = useCallback(
    (event) => {
      setPostalCode(event.target.value);
    },
    [setPostalCode]
  );

  const inputAddress = useCallback(
    (event) => {
      setAddress(event.target.value);
    },
    [setAddress]
  );

  const inputContent = useCallback(
    (event) => {
      setContent(event.target.value);
    },
    [setContent]
  );

  const validateEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === '') {
        isBlank = true;
      }
    }
    return isBlank;
  };

  // Slackに問い合わせがあったことを通知する
  const submitForm = () => {
    const isBlank = validateRequiredInput(name, furigana, tel, email, postalcode, address, content);
    const isValidEmail = validateEmailFormat(email);

    if (isBlank) {
      alert('必須入力欄が空白です。');
      return false;
    } else if (!isValidEmail) {
      alert('メールアドレスの書式が異なります。');
      return false;
    } else {
      const payload = {
        text:
          'お問い合わせがありました\n' +
          'お名前: ' +
          name +
          '\n' +
          'フリガナ: ' +
          furigana +
          '\n' +
          '電話番号: ' +
          tel +
          '\n' +
          'メールアドレス: ' +
          email +
          '\n' +
          '郵便番号: ' +
          postalcode +
          '\n' +
          '住所: ' +
          address +
          '\n' +
          'お問い合わせ内容: ' +
          content,
      };

      const url = process.env.REACT_APP_SLACK_URL;

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(() => {
        alert('送信が完了しました。追ってご連絡いたします。');
        setName('');
        setFurigana('');
        setTel('');
        setEmail('');
        setPostalCode('');
        setAddress('');
        setContent('');
      });
    }
  };

  return (
    <div className="form">
      <Input
        title={'お名前'}
        type={'text'}
        value={name}
        onChange={inputName}
        ex={'（例）工房 祐子'}
      />
      <div className="form-dashed"></div>
      <Input
        title={'フリガナ'}
        type={'text'}
        value={furigana}
        onChange={inputFurigana}
        ex={'（例）コウボウ ユウコ'}
      />
      <div className="form-dashed"></div>
      <Input
        title={'電話番号'}
        type={'tel'}
        value={tel}
        onChange={inputTel}
        ex={'（例）090-1234-5678'}
      />
      <div className="form-dashed"></div>
      <Input
        title={'メールアドレス'}
        type={'email'}
        value={email}
        onChange={inputEmail}
        ex={'（例）yu-kobo@xxx.ne.jp'}
      />
      <div className="form-dashed"></div>
      <Input
        title={'郵便番号'}
        type={'postal-code'}
        value={postalcode}
        onChange={inputPostalCode}
        ex={'（例）123-4567'}
      />
      <div className="form-dashed"></div>
      <Input
        title={'住所'}
        type={'address'}
        value={address}
        onChange={inputAddress}
        ex={'（例）広島県広島市中区1−2−3 広島マンション101'}
      />
      <div className="form-dashed"></div>
      <TextArea
        title={'お問い合わせの内容'}
        type={'text'}
        value={content}
        onChange={inputContent}
        ex={''}
      />
      <div className="form-border"></div>
      <div className="form-submit_wrapper">
        <button className="form-submit" type="submit" value="送信する" onClick={submitForm}>
          <p>
            <img src={submit} alt="submit" />
            送信する
          </p>
        </button>
      </div>
    </div>
  );
};

export default FormDialog;
