import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { getUser, user } = useContext(GithubContext);
  const param = useParams();

  useEffect(() => {
    getUser(param.login);
  }, []);

  return (
    <div>
    <h1>Name: {user.name}</h1>
      <h2>UserName: {param.login}</h2>
      <p>Bio: {user.bio}</p>
      <img src={user.avatar_url} alt="" />
    </div>
  );
};

export default User;
