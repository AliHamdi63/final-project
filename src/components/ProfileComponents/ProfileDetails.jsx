import React, { useState } from "react";
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
import imgHolder from "../../assets/images/noimage.png";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { InputAdornment } from "@mui/material";
function ProfileDetails() {
  const [file, setFile] = useState(null);
  function imageUploader(imageFile, data) {
    let picName = (Date.now() + imageFile.name).toString();
    console.log(picName);
    let formData = new FormData();
    formData.append("name", picName);
    formData.append("file", imageFile);
    data.image = picName;
    // uploadImage(formData);
  }

  return (
    <Container sx={{ my: 10 }}>
      {" "}
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
                Account Info{" "}
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
            <Grid
              container
              spacing={2}
              component="form"
              display={"flex"}
              flexDirection="row"
              justifyContent={"center"}
              alignItems="center"
            >
              {" "}
              <Grid item xs={12} md={6} justify="center">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box mt={2}>
                    <img
                      src={
                        file
                          ? typeof file === "string"
                            ? file
                            : URL.createObjectURL(file)
                          : imgHolder
                      }
                      width="400px"
                      alt=""
                    />
                  </Box>

                  <br />

                  <br />

                  <FormControl sx={{ mb: 10 }}>
                    <Button variant="contained" component="label">
                      Upload
                      <input
                        hidden
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setFile(event.target.files[0]);
                        }}
                      />{" "}
                    </Button>
                  </FormControl>
                </Box>
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
                  Account Details
                </Typography>
                <Container sx={{ my: 2 }}>
                  <Grid
                    container
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
                            <InputAdornment position="start"></InputAdornment>
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
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <FormControl sx={{ mt: 2 }} fullWidth>
                    <InputLabel htmlFor="Email-Field">Email</InputLabel>
                    <OutlinedInput id="Email-Field" label="Email" />
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
    </Container>
  );
}

export default ProfileDetails;
