import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function PurchaseSuccess() {
  return (
    <div>
      <Container>
        <Paper sx={{ my: 30, textAlign: "center" }}>
          <CheckCircleIcon
            sx={{ fontSize: "150px", color: "primary.main" }}
          ></CheckCircleIcon>
          <Typography variant="h2" sx={{ p: 2 }} fontWeight="bold">
            {" "}
            Your order was places succcessfully
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default PurchaseSuccess;
