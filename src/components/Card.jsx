import React from "react";

const Card = (props) => {
  const { name, live, email } = props.info;
  return (
    <div className='card'>
      <p>Name : {name}</p>
      <p>Live : {live}</p>
      <p>Email : {email}</p>
    </div>
  );
};

export default Card;
