import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <GitHubIcon
            sx={{ color: "#c0c0c0", fontSize: { xs: "2em", sm: "2.5em" } }}
          />
        </Link>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "0.8em", sm: "1em", md: "2em" },
            ml: "0.8em",
            fontWeight: 700,
            color: "#c0c0c0",
            flexGrow: 1,
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#c0c0c0",
            }}
          >
            Github Profiles
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.6em", sm: "0.8em", md: "1.5em" },
            ml: "0.8em",
            fontWeight: 700,
            color: "#c0c0c0",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#c0c0c0",
            }}
          >
            Home
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.6em", sm: "0.8em", md: "1.5em" },
            ml: "0.8em",
            fontWeight: 700,
            color: "#c0c0c0",
          }}
        >
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#c0c0c0",
            }}
          >
            About
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
