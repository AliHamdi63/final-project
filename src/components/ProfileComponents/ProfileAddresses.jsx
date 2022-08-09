import React, { useState, useEffect } from "react";
import { Container, Paper } from "@mui/material";
import CustomMap from "../shared/CustomMap";
// import MapLocation from "../shared/MapLocation";

function ProfileAddresses(props) {
  // console.log(props.isDarkTheme);
  const locateOptions = {
    position: "topright",
    strings: {
      title: "Show me where I am, yo!",
    },
    onActivate: () => {}, // callback before engine starts retrieving locations
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
        <CustomMap center={position} zoom={12} darkMode={isDark} />
      </Paper>
    </Container>
  );
}

export default ProfileAddresses;
