import { Box, Container, Typography, Divider } from "@mui/material";
import React from "react";
import MyContactCard from "../components/ContactComponents/MyContactCard";
import MapLocation from "../components/shared/MapLocation";

function MyContactPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <MyContactCard></MyContactCard>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Our Location{" "}
          </Typography>

          <Typography variant="h6" textAlign="center" alignSelf={"center"}>
            The Main Branch
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <MapLocation></MapLocation>
    </Box>
  );
}

export default MyContactPage;
