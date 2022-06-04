import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const UserItem = ({ user }) => {
  return (
    <Grid item xs={2} sm={4} md={3} key={user.id}>
      <Card sx={{ width: "12em", height: "2em" }}>
        <Grid
          container
          justifyContent="flex-start"
          spacing={-2}
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <Avatar
              alt={user.login}
              sx={{ width: "1.5em", height: "100%" }}
              src={user.avatar_url}
            />
          </Grid>
          <Grid>
            <Typography sx={{ ml: 2 }}>{user.login}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
export default UserItem;
