import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";

function createData(photo, name, price, kits, total) {
  return { photo, name, price, kits, total };
}

const rows = [
  createData(
    "https://media.blueapron.com/recipes/33247/square_newsletter_images/1656967470-29906-0059-0226/0222_2P12_Strip-Steak-Rosemary-Sauce_218_sq_Web.jpg?quality=80&width=850",
    "Steelhead Trout Fillets & Creamy Pesto",
    "$" + 21.99,
    2,
    "$" + 21.99
  ),
  createData(
    "https://media.blueapron.com/recipes/33247/square_newsletter_images/1656967470-29906-0059-0226/0222_2P12_Strip-Steak-Rosemary-Sauce_218_sq_Web.jpg?quality=80&width=850",
    "Steelhead Trout Fillets & Creamy Pesto",
    "$" + 21.99,
    2,
    "$" + 21.99
  ),
  createData(
    "https://media.blueapron.com/recipes/33247/square_newsletter_images/1656967470-29906-0059-0226/0222_2P12_Strip-Steak-Rosemary-Sauce_218_sq_Web.jpg?quality=80&width=850",
    "Steelhead Trout Fillets & Creamy Pesto",
    "$" + 21.99,
    2,
    "$" + 21.99
  ),
  createData(
    "https://media.blueapron.com/recipes/33247/square_newsletter_images/1656967470-29906-0059-0226/0222_2P12_Strip-Steak-Rosemary-Sauce_218_sq_Web.jpg?quality=80&width=850",
    "Steelhead Trout Fillets & Creamy Pesto",
    "$" + 21.99,
    2,
    "$" + 21.99
  ),
];

function MyCartItems() {
  return (
    <Container sx={{ minHeight: "100vh", mb: 8 }}>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Shopping Cart{" "}
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            alignSelf={"center"}
            className={"reda"}
          >
            Your meal kits
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Meal photo</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">price/Serving</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Kits No.</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Total.</Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="h6">Clear.</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.photo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.photo} alt="" width={"150px"} />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{row.name}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{row.kits}</Typography>
                </TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Fab color="secondary" aria-label="add" size="small">
                    <RemoveIcon></RemoveIcon>
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MyCartItems;
