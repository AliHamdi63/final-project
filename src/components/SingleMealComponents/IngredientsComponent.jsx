import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

function IngredientsComponent() {
  return (
    <Container maxWidth={"xl"}>
      {" "}
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={12} md={6}>
          <img
            src={
              "https://media.blueapron.com/recipes/33134/ingredient_images/1656601743-50-0003-0301/0801_2PRE12_large_feature.png"
            }
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                10 oz Chopped Chicken Breast{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                1 15.5-Ounce Can Black Beans
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                2 cloves Garlic
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                1 15-Ounce Can Crushed Tomatoes
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                2 Scallions
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                6 oz Carrots
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                2 tsps Chipotle Chile Paste
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                2 Tbsps Grated Cotija Cheese
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"large"}
              >
                ½ cup Plain Nonfat Greek Yogurt{" "}
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default IngredientsComponent;
