import React from 'react';
import { Top, Header } from '../index';

const About = () => {
  return (
    <>
      <Header id={'about'} />
      <div className="about">
        <Top className={'top-content top-content02'} />
        <div className="about-title">
          <h2>about</h2>
        </div>
        <div className="about-subtitle">
          <h3>
            日常の
            <br />
            「あったらいいな♪」を。
          </h3>
        </div>
        <div className="about-text_wrapper">
          <p className="about-text about-text01">
            こんにちは！Yu-工房です。
            <br />
            ハンドメイドでポーチやかばん、
            <br />
            マスク、お弁当袋など、
            <br />
            日常で使えるいろいろな小物を作っています。
          </p>
          <p className="about-text about-text02">
            始まりは、子どもたちの
            <br />
            「使い勝手のいい化粧ポーチ作って！」
            <br />
            という一言からでした。
          </p>
          <p className="about-text about-text03">
            作り方を勉強し、
            <br />
            そこからたくさん小物を作るようになり、
            <br />
            「あったらいいな♪」と思う品々を
            <br />
            より多くの人届けたい想いから
            <br />
            Yu-工房として活動をはじめています。
          </p>
          <p className="about-text about-text04">
            オーダーメイドも大歓迎です！
            <br />
            まずはお話ししましょう！
            <br />
            お問い合わせ、お待ちしております！
          </p>
          <div className="about-back">
            <div className="about-back_content"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
