import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const UserItem = ({ user }) => {
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center" }}
      xs={12}
      sm={6}
      md={4}
      key={user.id}
    >
      <Card
        sx={{
          width: { xs: "17em" },
          mb: "0.3em",
          mt: 0,
          height: { xs: "4em", sm: "4em" },
        }}
      >
        <Grid
          sx={{
            dispaly: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          container
          justifyContent="flex-start"
          spacing={2}
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <CardMedia
              alt={user.login}
              component="img"
              height="62em"
              image={user.avatar_url}
            />
          </Grid>
          <Grid>
            <Link style={{ textDecoration: "none" }} to={`/user/${user.login}`}>
              <Typography sx={{ ml: 4 }}>{user.login}</Typography>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
export default UserItem;
