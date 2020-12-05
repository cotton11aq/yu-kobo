import React from 'react';
import sechead from '../../img/dashed/sechead.png';

const SecTitle = () => {
  return (
    <>
      <div className="sectitle">
        <h2>
          お母さんが作ったような、
          <br />
          手作りのぬくもり。
        </h2>
        <div className="sectitle-border">
          <img src={sechead} alt="border" />
        </div>
        <div className="sectitle-backimg01"></div>
        <div className="sectitle-backimg02"></div>
      </div>
    </>
  );
};

export default SecTitle;
