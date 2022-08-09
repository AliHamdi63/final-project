import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

function ProfilePssword() {
  const [values, setValues] = useState({ showPassword: false });
  const [password, setPass] = useState("");

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
    // console.log(pass);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container sx={{ my: 10 }}>
      <Paper>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
              mt={2}
            >
              {" "}
              Change Password{" "}
            </Typography>

            <Divider
              color={"primary"}
              variant="middle"
              sx={{ height: 3 }}
            ></Divider>
          </Box>
        </Container>
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Old Password
            </InputLabel>
            <OutlinedInput
              id="password"
              onChange={onChangePass}
              type={values.showPassword ? "text" : "password"}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              New password
            </InputLabel>
            <OutlinedInput
              id="password"
              onChange={onChangePass}
              type={values.showPassword ? "text" : "password"}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm
            </InputLabel>

            <OutlinedInput
              id="password"
              onChange={onChangePass}
              type={values.showPassword ? "text" : "password"}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
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
              Change password
            </Button>
          </FormControl>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProfilePssword;
