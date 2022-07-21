import React from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
} from "@mui/material";
import footerImg from "../../assets/images/background.png";

function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerImg})`,
        width: "100%",
        height: 350,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: 350,
        backgroundColor: "primary",
      }}
    >
      <Box>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa
        amet iure quidem vitae nemo consectetur quisquam ut, libero possimus.
        Praesentium, inventore odio nihil accusantium magni dignissimos aperiam
        delectus qui.
      </Box>
    </Box>
  );
}

export default Footer;
