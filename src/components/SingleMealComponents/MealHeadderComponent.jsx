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
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AvTimerIcon from "@mui/icons-material/AvTimer";
function MealHeadderComponent() {
  return (
    <div>
      {" "}
      <Grid item xs={12} marginX={{ md: 15 }} marginY={5}>
        {/* sx={{ my: "50px", py: "50px" }} */}

        {/* //Paper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} justify="center">
              <img
                src={
                  "https://media.blueapron.com/recipes/33134/square_newsletter_images/1656431490-48-0013-4661/0801_2P12_Steelhead-Trout-Creamy-Pesto_336_SQ_Web.jpg?quality=80&width=850"
                }
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Container
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="h4"
                    textAlign="start"
                    fontFamily={"serif"}
                    fontWeight={"bold"}
                    color="primary.dark"
                  >
                    {" "}
                    Steelhead Trout Fillets & Creamy Pesto{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={"large"}
                  >
                    with Arugula & Corn Panzanella Salad
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary.light"
                    sx={{ display: "flex", alignItems: "center", gap: 0.0 }}
                  >
                    <AvTimerIcon></AvTimerIcon>
                    <Typography varient="caption" textAlign={"center"}>
                      {" "}
                      90 min
                    </Typography>
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      color="secondary"
                      sx={{
                        display: "flex",
                        gap: 2,
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      $21.99/serving
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2 Servings
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    From American Kitchen
                  </Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      color="text.secondary"
                    >
                      ORIGIN{" "}
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      Panzanella (or Italian bread salad) originated in Tuscany,
                      where people made use of stale bread by soaking it in
                      olive oil, then tossing it with fresh tomatoes and more
                      for a vibrant, delicious salad.
                    </Typography>
                  </Box>
                  <Box>
                    <Button variant="contained" size="large">
                      Add to cooking Cart
                    </Button>
                  </Box>
                  <Container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={"bold"}
                        color="text.secondary"
                      >
                        Nutrition
                      </Typography>

                      <Typography variant="body1">Per Serving</Typography>
                    </Box>

                    <Divider></Divider>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={"bold"}
                        color="text.secondary"
                      >
                        Calories
                      </Typography>

                      <Typography variant="body1">1170 Cals</Typography>
                    </Box>
                    <Divider></Divider>
                  </Container>
                </Box>
              </Container>
            </Grid>
          </Grid>
          <Container maxWidth={"xl"} px={8}>
            <Box sx={{ mx: 4, my: 4 }}>
              <Grid display={{ xs: "none", md: "block" }}>
                <Divider></Divider>
              </Grid>

              <Typography variant="h6" fontFamily={"serif"}>
                fresh
              </Typography>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                color={"primary.dark"}
              >
                INGREDIENTS
              </Typography>
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
}

export default MealHeadderComponent;
