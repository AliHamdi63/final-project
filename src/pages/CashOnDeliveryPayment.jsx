import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Container, Divider, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function CashOnDeliveryPayment() {
  return (
    <Box>
      {" "}
      <Box
        sx={{ backgroundColor: "primary.main", p: 2 }}
        id="customized-dialog-title"
      >
        <Typography color={"white"} variant="h4" fontFamily={"serif"}>
          Order
        </Typography>
      </Box>
      <DialogContent dividers>
        <Typography
          gutterBottom
          fontFamily={"serif"}
          fontWeight="bold"
          variant="h5"
        >
          Delivery Address
        </Typography>
        <Divider sx={{ mx: 2, my: 2 }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Grid container sx={{ display: "flex" }} spacing={4}>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Full Name:
              </Typography>
              <Typography>Abdelrahman Ibrahim</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Email:
              </Typography>
              <Typography> satoociva86@gmaill.com</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Phone:
              </Typography>
              <Typography>01062935901</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                City:
              </Typography>
              <Typography> طنطا</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Governant:
              </Typography>
              <Typography> الغربية</Typography>
            </Grid>
            <Grid item md={3}>
              {" "}
              <Typography color={"gray"} variant="h6">
                Street:
              </Typography>
              <Typography>شارع الجلاء</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Building NO.:
              </Typography>
              <Typography>3</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Floor NO.:
              </Typography>
              <Typography>6 </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography
          gutterBottom
          fontFamily={"serif"}
          fontWeight="bold"
          variant="h5"
          sx={{ mt: 2 }}
        >
          Payment Method
        </Typography>
        <Divider sx={{ mx: 2, my: 2 }}></Divider>
        <Typography gutterBottom>Card number:XXX-XXX-XXX-7224</Typography>
        <Typography
          gutterBottom
          fontFamily={"serif"}
          fontWeight="bold"
          variant="h5"
          sx={{ mt: 2 }}
        >
          Shopping Cart
          <Divider sx={{ mx: 2, my: 2 }}></Divider>{" "}
        </Typography>

        <Box mx={2}>
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Image
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Quantity
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Total
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/foodybackendserver.appspot.com/o/1659727985809306-2PP-Moroccan-Chicken-24269_WEB_SQ.webp?alt=media&token=01816470-6380-4114-b9ef-d9eab18779f7"
                      }
                      alt=""
                      width={"100px"}
                    />
                  </TableCell>
                  <TableCell align="right">Moroccan Chicken</TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography
                      variant="h6"
                      fontWeight={"bolder"}
                      color="primary"
                    >
                      EGP 900
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{2}</TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="h6"
                      fontWeight={"bolder"}
                      color="primary"
                    >
                      EGP 1200
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <Typography variant="h6">SubTotal: EGP 300</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Discount: 0 %</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" fs>
                  Grand total:{" "}
                  <Typography
                    fontWeight={"bold"}
                    component={"span"}
                    color="primary"
                    fontSize={"larger"}
                  >
                    {" "}
                    EGP 300
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </TableContainer>
        </Box>
      </DialogContent>
    </Box>
  );
}

export default CashOnDeliveryPayment;
