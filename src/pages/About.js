import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box sx={{ mt: { xs: "4em" } }}>
      <h2>About Me</h2>
      <Typography>
        Hello, My name is Esmaeil Saleh. Being a self-thought developer, I have
        learn to code by Love and enthuisiasm.
      </Typography>
      <p style={{display:'none'}}>

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

      </p>
    </Box>
  );
};

export default About;
