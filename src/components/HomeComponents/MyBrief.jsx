import React from "react";
import { Container, Paper, Grid, Typography, Button } from "@mui/material";
import sideImage from "../../assets/images/brief.jpg";

export default function MyBrief() {
  return (
    <Container sx={{ display: "block", pt: 5, pb: 5 }}>
      <Typography variant="h2" textAlign={"center"} pb={3}>
        A brief
      </Typography>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={sideImage} alt="" width={"100%"} height={"100%"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              p={2}
              color={"primary"}
              fontWeight={"bolder"}
            >
              Since 1987, at your service
            </Typography>
            <Typography variant="body1" p={2}>
              Restourant are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Proin a
              ullamcorper purus. Sed malesuada a dolor et aliquet.
            </Typography>
            <Typography variant="body1" p={2}>
              After 16 years in the restaurant business, 9 in farming, and
              several years dedicated to the study of nutrition, we decided now
              was the right time to take all that experience and synthesize it
              into a local eatery where people can enjoy exquisite food, support
              local food producers, and eat the kind of food they can feel good
              about.
            </Typography>
            <Grid container align="center">
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" textAlign={"start"}>
                  sdhaksd
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained">hhsa</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
