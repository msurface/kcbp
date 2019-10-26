import React from 'react';

const Button = props => {
  return (
    <button type="button" className={`btn btn-${props.btnColor} mx-2`}>
      {props.text}
    </button>
  );
};

export default Button;
