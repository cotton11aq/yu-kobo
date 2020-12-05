import React from 'react';

const TextArea = (props) => {
  return (
    <div className="form-wrapper">
      <div className="form-content">
        <p>
          {props.title}
          <span>必須</span>
        </p>
      </div>
      <div className="form-input">
        <textarea
          name="name"
          rows="8"
          cols="80"
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      </div>
      <p className="form-ex">{props.ex}</p>
    </div>
  );
};

export default TextArea;
