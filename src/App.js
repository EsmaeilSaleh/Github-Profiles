import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Alert from '@mui/material/Alert';

import UserResults from "./users/UserResults";
import AlertContext from './context/alert/AlertContext'

const App = () => {
  const [text, setText] = useState("");

const { setAlert, alert } = useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault();
if(text === '') {
setAlert('Please Enter Something', 'error')
}
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
          width: '22em',
        }}
      >
        <InputBase onChange={enteredText} placeholder="Search a name" />
        <IconButton>
          <SearchIcon onClick={handleSubmit}/>{" "}
        </IconButton>
      </Paper>
       {alert !== null && (
       <Alert sx={{width: '25em'}} variant='filled' severity={alert.type}>{alert.msg}</Alert>
       )}
      <List>
        <UserResults />
      </List>
    </div>
  );
};

export default App;
