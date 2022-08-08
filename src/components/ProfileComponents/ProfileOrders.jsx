import React, { useEffect } from "react";
import { Button, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "../shared/Modal";

import { getUserOrders } from '../../features/orders/orderSlice'
import { useDispatch, useSelector } from "react-redux";




function ProfileOrders() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(getUserOrders({ user }))

  }, [])
  const orders = useSelector((state) => state.orders.orders)

  // console.log(orders);

  const rows = []
  const ids = []
  let i = 0;
  orders.forEach((item) => {
    // console.log(item.status);
    // console.log(item.amount);
    ids.push(item._id);
    i++;
    rows.push({
      id: i,
      date: item.createdAt,
      status: item.status,
      total: item.amount,
      renderCell: (item)
    })
  })
  // console.log(ids);
  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "date", headerName: "Date", width: 170 },
    { field: "status", headerName: "Status", width: 170 },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 170,
    },

    {
      field: "Show",
      renderCell: (val) => {
        return <Modal order={val} />;
      },
    },
    {
      field: "delete",
      renderCell: (cellValues) => {
        return (
          <IconButton aria-label="delete" size="mediem">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        );
      },
    },
  ];
  // const rows = [
  //   {
  //     id: 1,
  //     date:
  //       new Date().toLocaleDateString("en-us", {
  //         weekday: "long",
  //         year: "numeric",
  //         month: "short",
  //         day: "numeric",
  //       }),
  //     status: "deliverd",
  //     total: "222 for 3 items",
  //     age: 35,
  //   },
  // ];


  return (
    <Container sx={{ my: 10 }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
        <Button></Button>
      </div>
    </Container>
  );
}

export default ProfileOrders;
