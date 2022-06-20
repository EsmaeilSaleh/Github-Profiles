import React, { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import GithubContext from "../context/github/GithubContext";

const ReposList = () => {
  const { repos } = useContext(GithubContext);

  return (
    <List sx={{ width: "100%" }}>
      {repos.map((repo) => (
        <ListItem sx={{ backgroundColor: "#c2c2c2", marginY: 1 }} key={repo.id}>
          <ListItemText
            primary={
              <>
                {" "}
                <Typography variant="h5">{repo.name}</Typography>{" "}
              </>
            }
            secondary={
              <React.Fragment>
                {repo.description && (
                  <Typography sx={{ fontWeight: 700 }}>
                    Description:{" "}
                  </Typography>
                )}
                <Typography>{repo.description}</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ReposList;
