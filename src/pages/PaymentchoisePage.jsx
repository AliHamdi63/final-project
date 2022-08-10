import { Button, Container, Paper, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import { Box } from "@mui/system";

function PaymentchoisePage() {
  return (
    <div>
      <Container sx={{ my: 25 }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            JustifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button variant="outlined" sx={{ width: "80%", mt: 2, p: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Typography fontWeight={"bold"}>
                use Online Payment Payment Method
              </Typography>
              <CreditCardIcon sx={{ fontSize: "70px" }}></CreditCardIcon>
            </Box>{" "}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ width: "80%", mb: 2, p: 5 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Typography fontWeight={"bold"}>
                use Cash on Delivery Payment Method
              </Typography>
              <LocalShippingIcon sx={{ fontSize: "70px" }}></LocalShippingIcon>
            </Box>
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default PaymentchoisePage;
