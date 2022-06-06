import React, { useContext } from "react";

import Grid from "@mui/material/Grid";

import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

const UserResults = () => {
  const { users } = useContext(GithubContext);

  return (
    <div>
      <Grid
        sx={{ margin: { xs: "0 10%", sm: "auto" }, mb: "10em" }}
        columns={{ xs: 2, sm: 12, md: 12 }}
        container
        spacing={{ xs: 4, md: 5 }}
      >
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </Grid>
    </div>
  );
};

export default UserResults;
