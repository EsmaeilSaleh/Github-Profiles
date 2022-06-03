import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
        return (
    <AppBar>
      <Toolbar>
      <IconButton>
      <GitHubIcon />
      </IconButton>

        <h1>hello</h1>
        <Link to='/about'>About us</Link>
      </Toolbar>
    </AppBar>
                )
}

export default Header
