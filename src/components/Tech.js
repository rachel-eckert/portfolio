import React from "react";
import { Box, Chip, Grid, Typography, Stack } from "@mui/material";

const Tech = () => {
  return (
    <Grid
      id="tech"
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column">
      <Box
        className="box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "60vw",
          flexDirection: "column",
        }}>
        <Typography variant="h4" sx={{ mb: 10 }}>
          Tech Skills
        </Typography>
        <Box sx={{ display: "block" }}>
          <Typography variant="h5">
            I am trained in using the PERN stack to develop full-stack
            applications, but am always looking to expand my knowledge and learn
            new skills.
          </Typography>
        </Box>

        <div>
          <Box sx={{ color: "#ffffff", mt: 3 }}>
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="Javascript"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="ReactJS"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="Redux"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="NodeJS"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="PostgreSQL"
            />
          </Box>
          <Box sx={{ color: "#ffffff", mt: 3 }}>
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="HTML"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="CSS"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="Sequelize"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="Expresss"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="Material UI"
            />
            <Chip
              sx={{ color: "#081C15", bgcolor: "#74C69D", mr: 1 }}
              label="Phaser3"
            />
          </Box>
        </div>
      </Box>
    </Grid>
  );
};

export default Tech;
