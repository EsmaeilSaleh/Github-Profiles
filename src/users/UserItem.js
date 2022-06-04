import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

const UserItem = ({ user }) => {
  return (
    <Grid item xs={2} key={user.id}>
      <Card sx={{ width: "12em", height: "12em" }}>
        <Avatar
          alt={user.login}
          sx={{ width: '100%', height: '80%' }}
          height="50%"
          src={user.avatar_url}
        />
        {user.login}
      </Card>
    </Grid>
  );
};
export default UserItem;
