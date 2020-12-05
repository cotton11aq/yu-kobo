import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import sp_logo from '../../img/top/sp_logo.png';
import pc_logo from '../../img/top/pc_logo.png';
import pc_back from '../../img/top/pc_back.png';

const Top = (props) => {
  return (
    <>
      <div className="top" id="sptop">
        <div className={props.className}>
          <div className="top-sp_logo"><img src={sp_logo} alt=""/></div>
          <div className="top-pc_logo"><img src={pc_logo} alt=""/></div>
          <div className="top-pc_back"><img src={pc_back} alt=""/></div>
          <div className="top-sns">
            <div className="top-sns_fa">
              <FacebookShareButton
                url={['yu-kobo.net']}
                quote={[
                  'Yu-工房 | こんなのあったらいいな♪を叶えた、さまざまな大きさの小物たちを揃えています。',
                ]}
              >
                fa
              </FacebookShareButton>
            </div>
            <div className="top-sns_tw">
              <TwitterShareButton
                url={['yu-kobo.net']}
                title={[
                  'Yu-工房 | こんなのあったらいいな♪を叶えた、さまざまな大きさの小物たちを揃えています。',
                ]}
              >
                tw
              </TwitterShareButton>
            </div>
            <div className="top-sns_in">
              <a href="https://www.instagram.com/yu_kobo/" target="_blank" rel="noreferrer">in</a>
            </div>
          </div>
          <p>
            handmade by housewife
            <br />
            ©︎Yu-kobo, All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Top;
