
import List from "@mui/material/List";
import Box from '@mui/material/Box';

import UserResults from "./users/UserResults";
import UserSearch from './users/UserSearch'

const App = () => {

  return (
    <Box sx={{mt: {xs: '4em'}}}>
      <h1>Welcome</h1>
      Search for a github profile:
      <UserSearch />
      <List>
        <UserResults />
      </List>
    </Box>
  );
};

export default App;
