import React from "react";

import { Container, Divider, Paper, Typography } from "@mui/material";
import { Grid, Box } from "@mui/material";
export default function PageError() {
  return (
    <div>
      {" "}
      <Container sx={{ my: 10 }}>
        <Paper>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                backgroundColor: "secondary.dark",
              }}
            >
              <Typography
                variant="h3"
                textAlign="center"
                fontWeight={"bold"}
                color="white"
              >
                {" "}
                404
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
