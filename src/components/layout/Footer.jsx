import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import footerImg from "../../assets/images/background.png";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MapLocation from "../shared/MapLocation";
function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerImg})`,
        width: "100%",
        height: { xs: 1450, md: 620 },
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: 350,
        backgroundColor: "primary",
        position: "sticky",
        top: "100%",
        bottom: "0",
      }}
      component="footer"
    >
      <Container>
        <Grid
          container
          p={2.5}
          direction="row-reverse"
          justifyContent="center"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={12} md={6} textAlign="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {" "}
                Stay Up To Date
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                Stay up to date with our latest news and meals
              </Typography>{" "}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {" "}
                Get Your Meal Kit Now
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained"> Get Cooking</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Divider color={"white"}></Divider>
        <Grid
          container
          p={2.5}
          justifyContent="center"
          alignItems="start"
          spacing={3}
        >
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, fontSize: 70 }}>
              Foody
              <RestaurantMenuIcon fontSize={"222px"}></RestaurantMenuIcon>
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              perspiciatis cupiditate numquam odio explicabo accusantium
              deserunt incidunt.
            </Typography>
            <Box my={2} display={"flex"} flexDirection={"column"} gap={2}>
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={2}
              >
                <LocationOnIcon color="primary"></LocationOnIcon>
                <Typography variant="body2">
                  ITI Menofia Branch Shbien Al Kom
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={2}
              >
                <LocalPhoneIcon color="primary"></LocalPhoneIcon>
                <Typography variant="body2" textAlign={"center"}>
                  01062935901
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={2}
              >
                <EmailIcon color="primary"></EmailIcon>
                <Typography variant="body2" textAlign={"center"}>
                  foody_delicous@kit.com
                </Typography>
              </Box>
              <Box display={"flex"} gap={1}>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Feedback
            </Typography>{" "}
            <Typography variant="caption">share your Feedback</Typography>{" "}
            <Box my={2} display={"flex"} flexDirection={"column"} gap={2}>
              {/* form */}
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-multiline-static"
                label="Subject"
                multiline
                rows={4}
              />
              {/* form */}
              <Button variant="contained"> submit</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Our Location
            </Typography>{" "}
            <Typography variant="caption">Main Branch</Typography>{" "}
            <Box my={2} display={"flex"} flexDirection={"column"} gap={2}>
              <MapLocation></MapLocation>
            </Box>
          </Grid>
        </Grid>
        <Divider color={"white"}></Divider>
        <Grid container p={2.5} spacing={2}>
          <Grid item>
            <Typography variant="caption">
              Copyright © 2022 All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
