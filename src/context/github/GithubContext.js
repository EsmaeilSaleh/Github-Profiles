import { createContext, useReducer, useParams } from "react";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // clear users from state
  const reUsers = () => {
    dispatch({
      type: "REMOVE_USERS",
    });
  };
  return (
    <GithubContext.Provider
      value={{ users: state.users, searchUsers, reUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
