import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import List from '@mui/material/List';

import UserResults from "./users/UserResults";

const App = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const enteredText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <Paper
        onSubmit={handleSubmit}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 400,
        }}
      >
        <InputBase onChange={enteredText} placeholder="Search a name" />
        <IconButton>
          <SearchIcon />{" "}
        </IconButton>
      </Paper>
      <Typography>{text}</Typography>
      <List>
        <UserResults />
      </List>
    </div>
  );
};

export default App;
