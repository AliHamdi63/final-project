import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyCard from "./MyCard";

const featureList = [1, 2, 3, 4, 5, 6, 7, 8];

export default function HomeChooseFrom() {
  return (
    <Box sx={{ my: "50px", py: "50px" }}>
      {/* <Container maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Choose from our menus
          </Typography>

          <Typography variant="h6" textAlign="center" alignSelf={"center"}>
            Choose from varity of meal kits that sutis your taste.
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Grid
          align="center"
          container
          spacing={4}
          sx={{ flexGrow: 1, mt: "40px" }}
        >
          {featureList.map((item) => (
            <Grid key={item} item xs={6} sm={4} md={3} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="green iguana"
                  sx={{ height: { xs: 150, sm: 250 } }}
                />
                <CardContent align="center">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: { xs: 17, sm: 25 }, padding: { xs: 0 } }}
                  >
                    Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt, voluptatibus.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid align="center">
          <Button variant="outlined" size="large" sx={{ mt: 5 }}>
            Browse our menus
          </Button>
        </Grid>
      </Container> */}
      <Container>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Choose from our menus
            </Typography>

            <Typography variant="h6" textAlign="center" alignSelf={"center"}>
              Choose from varity of meal kits that sutis your taste.
            </Typography>
            <Divider
              color={"primary"}
              variant="middle"
              sx={{ height: 3 }}
            ></Divider>
          </Box>
        </Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ flexGrow: 1, mt: "40px" }}
        >
          <Grid item lg={4}>
            <MyCard></MyCard>
          </Grid>
          <Grid item lg={4}>
            <MyCard></MyCard>
          </Grid>{" "}
          <Grid item lg={4}>
            <MyCard></MyCard>
          </Grid>{" "}
          <Grid item lg={4}>
            <MyCard></MyCard>
          </Grid>{" "}
          <Grid item lg={4}>
            <MyCard></MyCard>
          </Grid>{" "}
          <Grid item lg={4}>
            <MyCard></MyCard>
          </Grid>{" "}
        </Grid>
      </Container>
    </Box>
  );
}
