import React, { useState, useContext } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import AlertContext from "../context/alert/AlertContext";
import GithubContext from "../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { setAlert, alert } = useContext(AlertContext);
  const { users, searchUsers, reUsers } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Something", "error");
    } else {
      // @todo Search users
      searchUsers(text);
      setText("");
    }
  };
  const handleEnteredText = (e) => {
    setText(e.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Paper
          onSubmit={handleSubmit}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "22em",
          }}
        >
          <InputBase
            value={text}
            onChange={handleEnteredText}
            placeholder="Search a name"
          />
          <IconButton type="submit">
            <SearchIcon />{" "}
          </IconButton>
        </Paper>
        {alert !== null && (
          <Alert sx={{ width: "25em" }} variant="filled" severity={alert.type}>
            {alert.msg}
          </Alert>
        )}
      </Grid>

      {
        // Clear Button
      }

      {users.length > 0 && (
        <Grid item>
          <Button
            onClick={reUsers}
            variant="outlined"
            startIcon={<ClearAllRoundedIcon />}
          >
            Clear
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default UserSearch;
