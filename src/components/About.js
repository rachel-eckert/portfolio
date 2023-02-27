import React from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Directions } from "@mui/icons-material";

const About = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Box
        id="about"
        className="box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "80vw",
        }}>
        <img className="me-img" src="/Me.png" alt="image" />
        <Typography variant="h4" sx={{ mt: 2 }}>
          Hi! My name is Rachel Eckert and I am a full-stack software engineer
          based in New Jersey.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          I am always looking for new ways to express my creativity, and I found
          myself falling in love with web development for that reason.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          I graduated in January 2022 with a B.A. in Communications from Ramapo
          College of New Jersey.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          In February of 2023, I graduated from The Grace Hopper 17 week
          software engineering immersive at Fullstack Academy.
        </Typography>
      </Box>
    </Grid>
  );
};

export default About;
