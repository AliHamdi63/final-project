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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function createData(image, name, price, quantity, total) {
  return { image, name, price, quantity, total };
}

const rows = [
  createData(
    "https://media.blueapron.com/recipes/33498/square_newsletter_images/1657644961-44-0059-8585/0815_2P8_Crispy-Prosciutto-Lettuce-Cups_018_SQ_Web.jpg?quality=80&width=850",
    "Tomatoes Marinated in Vinegar",
    200,
    6,
    1200
  ),
  createData(
    "https://media.blueapron.com/recipes/33498/square_newsletter_images/1657644961-44-0059-8585/0815_2P8_Crispy-Prosciutto-Lettuce-Cups_018_SQ_Web.jpg?quality=80&width=850",
    "Tomatoes Marinated in Vinegar",
    200,
    6,
    1200
  ),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="delete"
        size="mediem"
        color="primary"
        onClick={handleClickOpen}
      >
        <VisibilityIcon fontSize="inherit" />
      </IconButton>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth={"xl"}
      >
        <Box
          sx={{ backgroundColor: "primary.main", p: 2 }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography color={"white"} variant="h4" fontFamily={"serif"}>
            Order #1981
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
                <Typography>Abdelrahman_Elemay99@outlook.com</Typography>
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
                <Typography>Tanta:</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Governant:
                </Typography>
                <Typography>Alghrbia</Typography>
              </Grid>
              <Grid item md={3}>
                {" "}
                <Typography color={"gray"} variant="h6">
                  Street:
                </Typography>
                <Typography>13 kobryfarouq el-glaa st</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Bulding NO.:
                </Typography>
                <Typography>8</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  floor NO.:
                </Typography>
                <Typography>10</Typography>
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
          {/* <Box sx={{ overflow: "auto" }}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={4}
            >
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Image
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography color={"gray"} variant="h6">
                  Name:
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography color={"gray"} variant="h6">
                  Price:
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography color={"gray"} variant="h6">
                  Quantity:
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography color={"gray"} variant="h6">
                  Total:
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mx: 2, my: 2 }}></Divider>{" "}
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={4}
            >
              <Grid item md={3}>
                <img
                  src="https://media.blueapron.com/recipes/33498/square_newsletter_images/1657644961-44-0059-8585/0815_2P8_Crispy-Prosciutto-Lettuce-Cups_018_SQ_Web.jpg?quality=80&width=850"
                  alt=""
                  width={"100px"}
                />
              </Grid>
              <Grid item md={3}>
                <Typography>Crispy Prosciutto Lettuce Cups</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography color={"primary"} fontWeight="bolder">
                  {" "}
                  EGP 300
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>4</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography color={"primary"} fontWeight="bolder">
                  EGP 1200
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mx: 2, my: 2 }}></Divider>{" "}
          </Box> */}
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
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <img src={row.image} alt="" width={"100px"} />
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Typography
                          variant="h6"
                          fontWeight={"bolder"}
                          color="primary"
                        >
                          EGP {row.price}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="h6"
                          fontWeight={"bolder"}
                          color="primary"
                        >
                          EGP {row.total}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid item xs={12}>
                  <Typography variant="h6">SubTotal: EGP 2200</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Discount: 15 %</Typography>
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
                      EGP 1900
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </TableContainer>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
