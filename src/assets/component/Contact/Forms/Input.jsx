import React from 'react';

const Input = (props) => {
  return (
    <>
      <div className="form-wrapper">
        <div className="form-content">
          <p>
            {props.title}
            <span>必須</span>
          </p>
        </div>
        <div className="form-input">
          <input
            className="form-input_name"
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
          <p className="form-ex">{props.ex}</p>
        </div>
      </div>
    </>
  );
};

export default Input;
