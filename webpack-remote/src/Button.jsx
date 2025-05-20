import React from 'react';

const Button = (props) => {
  const { onClick } = props;
  return <button onClick={onClick}>hello123</button>;
};

export default Button;