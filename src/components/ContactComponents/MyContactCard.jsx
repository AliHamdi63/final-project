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
import sideImage from "../../assets/svgs/contact us.svg";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function MyContactCard() {
  return (
    <div>
      {" "}
      <Container
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        {/* sx={{ my: "50px", py: "50px" }} */}
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Contact Us
            </Typography>

            <Typography variant="h6" textAlign="center" alignSelf={"center"}>
              Got A Question? We'll Answer
            </Typography>
            <Divider
              color={"primary"}
              variant="middle"
              sx={{ height: 3 }}
            ></Divider>
          </Box>
        </Container>
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
            <Grid item xs={12} md={4} textAlign="center" mt={2}>
              <BusinessIcon color="primary" fontSize="large">
                {" "}
              </BusinessIcon>
              <Typography variant="h5" color={"primary.light"}>
                Address:
              </Typography>
              <Typography variant="h6">
                ITI Menofia Branch Shbien Al Kom,Almenofia
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center" mt={2}>
              <PhoneIcon color="primary" fontSize="large">
                {" "}
              </PhoneIcon>
              <Typography variant="h5" color={"primary.light"}>
                Phones:
              </Typography>
              <Typography variant="h6">(040) 3558194</Typography>
              <Typography variant="h6">(+20) 1062935901</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center" mt={2}>
              <EmailIcon color="primary" fontSize="large">
                {" "}
              </EmailIcon>
              <Typography variant="h5" color={"primary.light"}>
                E-mail:
              </Typography>
              <Typography variant="h6">foody_delicous@kit.com </Typography>
            </Grid>
            <Grid item xs={12} md={6} justify="center">
              <img src={sideImage} alt="" width={"100%"} height={"100%"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
                color="primary.dark"
              >
                {" "}
                Get In Touch
              </Typography>
              <Container sx={{ my: 2 }} component="form">
                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Name-Field">Name</InputLabel>
                  <OutlinedInput id="Name-Field" label="Name" />
                </FormControl>
                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Email-Field">Email</InputLabel>
                  <OutlinedInput id="Email-Field" label="Email" />
                </FormControl>
                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Phone-Field">Phone</InputLabel>
                  <OutlinedInput id="Phone-Field" label="Phone" />
                </FormControl>
                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Message-Field">Message</InputLabel>
                  <OutlinedInput
                    id="Message-Field"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </FormControl>
                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Phone-Field">Phone</InputLabel>
                  <OutlinedInput id="Phone-Field" label="Phone" />
                </FormControl>
                <FormControl sx={{ mt: 2 }}>
                  <Button variant="contained" type="sumbit">
                    {" "}
                    Submit
                  </Button>
                </FormControl>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default MyContactCard;
