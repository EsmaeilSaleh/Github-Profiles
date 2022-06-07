import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import Paper from "@mui/material/Paper";

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
      <Card sx={{ position: "relative", maxWidth: 250 }}>
        <CardMedia component='img' image={user.avatar_url}/>
          <h2 style={{ background: '#3e3e3e', width: '100%', position: "absolute", bottom: 0 }}>
            UserName: {param.login}
          </h2>
      </Card>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default User;
