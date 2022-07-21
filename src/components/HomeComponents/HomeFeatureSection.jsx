import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const featureList = [1, 2, 3];

export default function HomeFeatureSection() {
  return (
    <Box sx={{ my: "50px", py: "50px" }}>
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
            Main Feature of our Business
          </Typography>

          <Typography variant="h6" textAlign="center" alignSelf={"center"}>
            See why home cooks stick with the original Egyption meal kit.
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
          spacing={2}
          sx={{ flexGrow: 1, mt: "40px" }}
        >
          {featureList.map((item) => (
            <Grid key={item} item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://source.unsplash.com/random"
                  alt="green iguana"
                />
                <CardContent align="center">
                  <Typography gutterBottom variant="h5" component="div">
                    5 decades of top restaurant experience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt, voluptatibus.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
