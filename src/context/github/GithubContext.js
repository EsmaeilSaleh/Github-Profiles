import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  let navigate = useNavigate();
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // search user
  const searchUsers = async (text) => {
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // get single user
  const getUser = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`);
    if (response.status === 404) {
      navigate("/notfound", { replace: true });
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // clear users from state
  const reUsers = () => {
    dispatch({
      type: "REMOVE_USERS",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        searchUsers,
        reUsers,
        user: state.user,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
