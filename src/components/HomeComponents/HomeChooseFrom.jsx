import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const featureList = [1, 2, 3, 4, 5, 6, 7, 8];

export default function HomeChooseFrom() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ mt: "50px", mb: "50px" }}>
        <Container maxWidth="sm">
          <Typography color="primary" variant="h3" align="center" gutterBottom>
            Choose from our menus
          </Typography>
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
              Brouse our menus
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
