import React from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
} from "@mui/material";

function InstructionsComponent() {
  return (
    <div>
      {" "}
      <Grid item xs={12} marginX={{ md: 15 }}>
        {/* sx={{ my: "50px", py: "50px" }} */}

        {/* //Paper */}
        <Container maxWidth={"xl"} px={8}>
          <Box sx={{ mx: 4, my: 4 }}>
            <Grid display={{ xs: "none", md: "block" }}>
              <Divider></Divider>
            </Grid>

            <Typography variant="h6" fontFamily={"serif"}>
              step-by-step
            </Typography>
            <Typography variant="h4" fontWeight={"bold"} color={"primary.dark"}>
              INSTRUCTIONS
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Grid container spacing={2} mb={5}>
            <Grid item xs={12} md={6} justify="center" mb={15}>
              <img
                src={
                  "https://media.blueapron.com/recipes/22605/recipe_steps/36704/1568062303-33-0092-0753/0311_W6_Chicken-Chili_0568_Web.jpg?width=512"
                }
                alt=""
                width={"100%"}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography>Prepare the ingredients:</Typography>
                <Divider></Divider>
                <Typography>
                  Wash and dry the fresh produce. Peel the carrots; halve
                  lengthwise, then thinly slice crosswise. Thinly slice the
                  scallions, separating the white bottoms and hollow green tops.
                  Peel and roughly chop 2 cloves of garlic.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} justify="center" mb={15}>
              <img
                src={
                  "https://media.blueapron.com/recipes/22605/recipe_steps/36705/1568062309-34-0098-5168/0311_W6_Chicken-Chili_0573_Web.jpg?width=512"
                }
                alt=""
                width={"100%"}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography>Prepare the ingredients:</Typography>
                <Divider></Divider>
                <Typography>
                  Wash and dry the fresh produce. Peel the carrots; halve
                  lengthwise, then thinly slice crosswise. Thinly slice the
                  scallions, separating the white bottoms and hollow green tops.
                  Peel and roughly chop 2 cloves of garlic.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} justify="center" mb={15}>
              <img
                src={
                  "https://media.blueapron.com/recipes/22605/recipe_steps/36706/1568062315-33-0093-4652/0311_W6_Chicken-Chili_0581_Web.jpg?width=512"
                }
                alt=""
                width={"100%"}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography>Prepare the ingredients:</Typography>
                <Divider></Divider>
                <Typography>
                  Wash and dry the fresh produce. Peel the carrots; halve
                  lengthwise, then thinly slice crosswise. Thinly slice the
                  scallions, separating the white bottoms and hollow green tops.
                  Peel and roughly chop 2 cloves of garlic.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} justify="center" mb={15}>
              <img
                src={
                  "https://media.blueapron.com/recipes/22605/recipe_steps/36707/1568062321-34-0099-4168/0311_W6_Chicken-Chili_0584_Web.jpg?width=512"
                }
                alt=""
                width={"100%"}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box>
                  {/* <Box
                    variant="h6"
                    fontWeight={"bold"}
                    sx={{ backgroundColor: "primary.main" }}
                    display={"inline"}
                    borderRadius={"100%"}
                    px={3}
                    py={3}
                    color="white"

                  >
                    1
                  </Box> */}
                  <Typography variant="h6" fontWeight={"bold"}>
                    Prepare the ingredients:
                  </Typography>
                </Box>

                <Divider></Divider>
                <Typography>
                  Wash and dry the fresh produce. Peel the carrots; halve
                  lengthwise, then thinly slice crosswise. Thinly slice the
                  scallions, separating the white bottoms and hollow green tops.
                  Peel and roughly chop 2 cloves of garlic.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default InstructionsComponent;
