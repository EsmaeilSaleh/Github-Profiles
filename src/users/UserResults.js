import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import UserItem from './UserItem'

const UserResults = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };
  return (
    <div>
      <h2>UserResults</h2>
      <Grid sx={{mb: '10em'}} container spacing={8}>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />
        })}
      </Grid>
    </div>
  );
};

export default UserResults;
