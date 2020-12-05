import React from 'react';
import contents03 from '../../img/contents/contents03.png';
import contents04 from '../../img/contents/contents04.png';

const ContentsImg = (props) => {
  return (
    <>
      <div className="contentsimg-pic">
        <div className="contentsimg-content">
          <img className="contentsimg-content03" src={contents03} alt="contents03" />
          <img className="contentsimg-content04" src={contents04} alt="contents04" />
        </div>
      </div>
    </>
  );
};

export default ContentsImg;
