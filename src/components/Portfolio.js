import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallMadeIcon from "@mui/icons-material/CallMade";
const Portfolio = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      id="projects"
      sx={{
        justifyContent: "center",
      }}>
      <Box
        className="box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "80vw",
        }}>
        <Typography variant="h4" sx={{ mt: 5 }}>
          Projects
        </Typography>

        <Grid
          container
          // spacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 6 }}
          sx={{
            justifyContent: "center",
          }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}>
            <Card
              sx={{
                width: 350,
                height: 350,
                bgcolor: "#95D5B2",
                color: "#081C15",
                m: 3,
              }}>
              <CardMedia
                component="img"
                image="/honey.png"
                sx={{ width: 350, height: 200 }}
              />

              <CardContent>
                <Typography>Everything Honey</Typography>
                <Typography>
                  An e-commerce site using the PERN stack, JWT, and bCrypt to
                  sell anything honey related.
                </Typography>
              </CardContent>
              <Box
                className="gitlink"
                sx={{
                  display: "flex",
                  alignContent: "flex-end",
                  flexDirection: "row",
                }}>
                <a
                  className="gitlink"
                  href="https://github.com/Anteater-GraceShopper/graceshopper-project"
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHubIcon sx={{ color: "#000000", mr: 1, mb: 1 }} />
                </a>
              </Box>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}>
            <Card
              sx={{
                width: 350,
                height: 350,
                bgcolor: "#95D5B2",
                color: "#081C15",
                m: 3,
              }}>
              <CardMedia
                component="img"
                image="https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324"
                sx={{ width: 350, height: 200 }}
              />

              <CardContent>
                <Typography>
                  A mock Stardew Valley Wiki created with the PERN stack,
                  Sequelize, and Material-UI.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  justifyContent: "flex-end",
                }}>
                <a
                  className="gitlink2"
                  href="https://github.com/rachel-eckert/Sdv-wiki"
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHubIcon sx={{ color: "#000000", mr: 1, mb: 1 }} />
                </a>
              </Box>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}>
            <Card
              sx={{
                width: 350,
                height: 350,
                bgcolor: "#95D5B2",
                color: "#081C15",
                m: 3,
              }}>
              <CardMedia
                component="img"
                image="/screenshot2.png"
                sx={{ width: 350, height: 200 }}
              />

              <CardContent>
                <Typography className="type">Toad's Garden</Typography>
                <Typography>
                  A platformer style game created with Phaser3, JavaScript, and
                  Tiled Map Editor.
                </Typography>
              </CardContent>
              <Box
                className="gitlink"
                sx={{
                  display: "flex",
                  alignContent: "flex-end",
                  flexDirection: "row",
                }}>
                <a
                  className="gitlink"
                  href="https://github.com/toads-garden/toads-garden-web"
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHubIcon sx={{ color: "#000000", mr: 1, mb: 1 }} />
                </a>
                <Tooltip title="View deployed site" placement="bottom">
                  <a
                    className="gitlink"
                    href="https://toads-garden.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <CallMadeIcon sx={{ color: "#000000", mr: 1, mb: 1 }} />
                  </a>
                </Tooltip>
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Portfolio;

// cards
