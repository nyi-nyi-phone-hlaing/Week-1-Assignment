import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const Main = () => {
  const [userInfos, setUserInfos] = useState([]);

  const getUserInfo = (newUserInfo) => {
    setUserInfos([...userInfos, newUserInfo]);
  };

  return (
    <section className='Main'>
      <Form getUserInfo={getUserInfo} />
      <List userInfos={userInfos} />
    </section>
  );
};

export default Main;
