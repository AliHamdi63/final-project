import React from "react";
import { Container, Divider, Paper, Typography } from "@mui/material";
import { Grid, Box } from "@mui/material";

import { useSelector } from "react-redux";




function ProfileDashboard() {

  const user = useSelector((state) => state.auth.user)
  // console.log(user?.address?.city);
  return (
    <Container sx={{ my: 10 }}>
      <Paper>
        <Container sx={{ py: 2 }}>
          <Container maxWidth="md" sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
              <Typography
                variant="h3"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {" "}
                User DashBoard{" "}
              </Typography>

              <Divider
                color={"primary"}
                variant="middle"
                sx={{ height: 3 }}
              ></Divider>
            </Box>
          </Container>
          <Typography>
            Hello,
            {
              <Typography component={"span"} fontWeight="bold">
                {user.firstName} {user.lastName} {' '}
              </Typography>
            }
            From your Account Dashboard you have the ability to view a snapshot
            of your recent account activity and update your account information.
          </Typography>
          <Grid container spacing={4} mt={1}>
            <Grid item xs={12} md={6}>
              <Paper variant="outlined">
                <Container>
                  <Typography variant="h6" fontFamily={"serif"} color="primary">
                    Account Information
                  </Typography>
                  <Divider></Divider>
                  <Typography>{user.firstName} {user.lastName}</Typography>{" "}
                  <Typography>{user.email} </Typography>{" "}
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper variant="outlined">
                <Container>
                  <Typography variant="h6" fontFamily={"serif"} color="primary">
                    Address
                  </Typography>
                  <Divider></Divider>
                  <Typography>
                    {
                      user?.address?.city == undefined && user?.address?.area == undefined
                        ?
                        "None"
                        :
                        (user?.address?.city + " " + user?.address?.area)
                    }
                  </Typography>{" "}
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}

export default ProfileDashboard;
