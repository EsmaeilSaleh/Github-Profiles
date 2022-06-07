import React from "react";

import Box from "@mui/material/Box";

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        background: "#414141",
        color: "white",
      }}
    >
      <h2 style={{ paddingBottom: "0.2em", fontSize: "1.5em" }}>#</h2>
      <p>Explore Github profiles</p>
      <p style={{ pb: "0.2em" }}>
        Copyright &copy;{footerYear} All rights reserved.
      </p>
    </Box>
  );
};

export default Footer;
