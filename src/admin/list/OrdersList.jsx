import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ordersEdit, ordersFetch } from "../../features/ordersSlice";
import moment from "moment";

export default function OrdersList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(ordersFetch());
  }, [dispatch]);

  const rows =
    list &&
    list.map((order) => {
      return {
        id: order._id,
        cName: order.shipping.name,
        amount: (order.total / 100)?.toLocaleString(),
        dStatus: order.delivery_status,
        date: moment(order.createdAt).fromNow(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "cName",
      headerName: "Name",
      width: 170,
    },
    { field: "amount", headerName: "Amount($)", width: 130 },
    {
      field: "dStatus",
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        return (
          <div>
            {params.row.dStatus === "pending" ? (
              <div>Pending</div>
            ) : params.row.dStatus === "dispatched" ? (
              <div>Dispatched</div>
            ) : params.row.dStatus === "delivered" ? (
              <div>Delivered</div>
            ) : (
              "error"
            )}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 300,
      renderCell: (params) => {
        return (
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <Button variant="contained" color="error" size="small" onClick={()=>handleOrderDispatch(params.row.id)} >
              Dispatch
            </Button>
            <Button variant="contained" color="error" size="small" onClick={()=>handleOrderDeliver(params.row.id)}>
              Deliver
            </Button>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => navigate(`/order/${params.row.id}`)}
            >
              View
            </Button>
          </Stack>
        );
      },
    },
  ];

  const handleOrderDispatch = (id)=>{
    dispatch(ordersEdit({
      id,
      delivery_status: "dispatched"
    }))
  }

  const handleOrderDeliver = (id)=>{
    dispatch(ordersEdit({
      id,
      delivery_status: "delivered"
    }))
  }

  return (
    <div style={{ height: 400, width: "100%" }} className="me-2 mt-4">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
