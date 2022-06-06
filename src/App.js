
import List from "@mui/material/List";

import UserResults from "./users/UserResults";
import UserSearch from './users/UserSearch'

const App = () => {

  return (
    <div>
      <h1>Welcome</h1>
      Search for a github profile(e.g: linus):
      <UserSearch />
      <List>
        <UserResults />
      </List>
    </div>
  );
};

export default App;
