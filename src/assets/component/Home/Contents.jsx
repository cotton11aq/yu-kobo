import React from 'react';
import { Content } from '../index';
import contents01 from '../../img/contents/contents01.png';
import contents02 from '../../img/contents/contents02.png';
import contents03 from '../../img/contents/contents03.png';
import contents04 from '../../img/contents/contents04.png';
import contents05 from '../../img/contents/contents05.png';
import contents06 from '../../img/contents/contents06.png';
import pc_contents01 from '../../img/contents/pc_contents01.png';
import pc_contents02 from '../../img/contents/pc_contents02.png';

const Contents = (props) => {
  return (
    <>
      <div className="contents contents-01">
        <Content
          className={'content content-01'}
          num={'01'}
          head01={'糸から生地まで'}
          head02={'こだわりを持って選ぶ'}
          text01={'手触りや色、柔らかさを'}
          text02={'目と肌で確認してから選んでいます。'}
          text03={'全体を支える、わずかにしか見えない糸も'}
          text04={'太さや生地との相性を吟味し、'}
          text05={'こだわっています。'}
        />
        <div className="contentsimg-pic contentsimg-pic01">
          <div className="contentsimg-content">
            <img className="contentsimg-content01" src={contents01} alt="contents01" />
            <img className="contentsimg-content02" src={contents02} alt="contents02" />
            <img className="contentsimg-pc_content01" src={pc_contents01} alt="pc_contents01" />
            <img className="contentsimg-pc_content02" src={pc_contents02} alt="pc_contents02" />
          </div>
        </div>
      </div>
      <div className="contents">
        <Content
          className={'content content-02'}
          num={'02'}
          head01={'商品は'}
          head02={'包装してお届け'}
          text01={'手づくり感は残しながら、'}
          text02={'アイロンで形を整え丁寧に仕上げます。'}
          text03={'自分から自分へ、友達へ、子どもたちへ、'}
          text04={'プレゼントでも、そうでなくでも'}
          text05={'包装してお届けしています。'}
        />
        <div className="contentsimg-pic contentsimg-pic02">
          <div className="contentsimg-content">
            <img className="contentsimg-content03" src={contents03} alt="contents03" />
            <img className="contentsimg-content04" src={contents04} alt="contents04" />
          </div>
        </div>
      </div>
      <div className="contents">
        <Content
          className={'content content-03'}
          num={'03'}
          head01={'オーダーメイドで'}
          head02={'思い出を残す'}
          text01={'大事なひとや自分使っていた'}
          text02={'想い入れのあるかばんや服、スカーフに'}
          text03={'再びかばんやポーチへと息を吹き込む。'}
          text04={'この生地でこんなポーチがほしい！のご相談を'}
          text05={'いつでもお待ちしております。'}
        />
        <div className="contentsimg-pic contentsimg-pic03">
          <div className="contentsimg-content">
            <img className="contentsimg-content05" src={contents05} alt="contents05" />
            <img className="contentsimg-content06" src={contents06} alt="contents06" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
