import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const Top = (props) => {
  return (
    <>
      <div className="top" id="sptop">
        <div className={props.className}>
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
