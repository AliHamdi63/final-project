// import { Box } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapLocation() {
  return (
    <Box sx={{ height: "250px", width: "100%" }}>
      <MapContainer
        center={[30.550964701276385, 31.009036511610887]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[30.550964701276385, 31.009036511610887]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            <Typography textAlign={"center"}>
              {" "}
              ITI <br /> Menofia Branch.
            </Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

export default MapLocation;
