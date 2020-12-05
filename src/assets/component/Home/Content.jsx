import React from 'react';
import contents from '../../img/dashed/contents.png';

const Content = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="content-head">
          <h3>
            {props.head01}
            <br />
            {props.head02}
          </h3>
          <div className="content-num">
            <p>{props.num}</p>
          </div>
          <img src={contents} alt="contents" />
        </div>
        <div className="content-text">
          <p>
            {props.text01}
            <br />
            {props.text02}
            <br />
            {props.text03}
            <br />
            {props.text04}
            <br />
            {props.text05}
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
