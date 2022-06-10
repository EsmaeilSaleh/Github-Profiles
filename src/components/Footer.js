import React from "react";

import Typography from '@mui/material/Typography';

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer
      style={{
        width: "100%",
        textAlign: "center",
        background: "#414141",
        color: "white",
      }}
    >
      <Typography>Explore Github profiles</Typography>
      <Typography style={{ pb: "0.2em" }}>
        Copyright &copy;{footerYear} All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
