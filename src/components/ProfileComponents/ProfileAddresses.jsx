import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import CustomMap from "../shared/CustomMap";
// import MapLocation from "../shared/MapLocation";

function ProfileAddresses(props) {
  // console.log(props.isDarkTheme);
  const locateOptions = {
    position: "topright",
    strings: {
      title: "Show me where I am, yo!",
    },
    onActivate: () => { }, // callback before engine starts retrieving locations
  };
  const position = [30.550964701276385, 31.009036511610887];

  let isDarkMode = props.isDarkTheme;
  const [isDark, setIsDark] = useState(props.isDarkTheme);
  useEffect(() => {
    if (isDarkMode === true) {
      setIsDark(true);
    }
    if (isDarkMode === false) {
      setIsDark(false);
    }
  }, [isDarkMode]);
  return (
    <Container sx={{ my: 10 }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          <Typography
            variant="h3"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
            mr={5}
          >
            User Adress information
          </Typography>

          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>

        <Container component={"form"} sx={{ my: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="street-Field">Street</InputLabel>
              <OutlinedInput id="street-Field" label="area" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Area</InputLabel>
              <OutlinedInput id="area-Field" label="area" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Area</InputLabel>
              <OutlinedInput id="area-Field" label="area" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Area</InputLabel>
              <OutlinedInput id="area-Field" label="area" />
            </FormControl>
          </Box>
        </Container>
        <CustomMap center={position} darkMode={isDark} />
      </Paper>
    </Container>
  );
}

export default ProfileAddresses;
