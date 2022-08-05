import { React, useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import cookImage from "../../assets/svgs/Recipe book-bro.svg";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

function RegisterCard() {
  const [values, setValues] = useState({ showPassword: false });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <div>
      {" "}
      <Container
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Grid container spacing={2}>
            {" "}
            <Grid
              item
              md={6}
              justify="center"
              display={{ xs: "none", md: "block" }}
            >
              <Box width={"100%"} height={"100%"} sx={{ position: "relative" }}>
                <img src={cookImage} alt="" width={"100%"} height={"100%"} />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 50,
                    position: "absolute",
                    top: "40%",
                    left: "38%",
                  }}
                >
                  Foody
                  <RestaurantMenuIcon fontSize={"222px"}></RestaurantMenuIcon>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
                color="primary.dark"
                pt={3}
              >
                {" "}
                Register
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Box>

              <Container sx={{ my: 3 }} component="form">
                <Grid
                  Container
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                >
                  <Grid item xs={12} md={5.5}>
                    {" "}
                    <FormControl sx={{ mt: 2 }} fullWidth>
                      <InputLabel htmlFor="FirstName-Field">
                        First Name
                      </InputLabel>
                      <OutlinedInput
                        id="FirstName-Field"
                        label="First Name"
                        startAdornment={
                          <InputAdornment position="start">
                            <PersonIcon></PersonIcon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <FormControl sx={{ mt: 2 }} fullWidth>
                      <InputLabel htmlFor="LastName-Field">
                        Last Name
                      </InputLabel>
                      <OutlinedInput
                        id="LastName-Field"
                        label="Last Name"
                        startAdornment={
                          <InputAdornment position="start">
                            <PersonIcon></PersonIcon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Email-Field">Email</InputLabel>
                  <OutlinedInput
                    id="Email-Field"
                    label="Email"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon></PersonIcon>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Password-Field">Password</InputLabel>
                  <OutlinedInput
                    id="Password-Field"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon></LockIcon>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControl
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" sx={{ my: 5 }} type="sumbit">
                    sign up
                  </Button>
                </FormControl>
              </Container>
              <Grid
                container
                p={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
              ></Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default RegisterCard;
