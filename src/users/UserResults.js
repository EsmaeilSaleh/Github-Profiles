import React, { useContext } from "react";

import Grid from "@mui/material/Grid";

import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

const UserResults = () => {
  const { users } = useContext(GithubContext);

  return (
    <>
      <Grid
        container
        spacing={2}
      >
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </Grid>
    </>
  );
};

export default UserResults;
