import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productsDelete } from "../../features/productSlice";
import EditProduct from "../EditProduct";

export default function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { items } = useSelector((state) => state.products);


  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        pName: item.name,
        pDesc: item.desc,
        price: item.price.toLocaleString(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={params.row.imageUrl}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        );
      },
    },
    { field: "pName", headerName: "Name", width: 130 },
    { field: "pDesc", headerName: "Description", width: 130 },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      renderCell: (params) => {
        return (
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <Button variant="contained" color="error" size="small" onClick={()=>handleDelete(params.row.id)}>
              Delete
            </Button>
           <EditProduct prodId={params.row.id} />
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => navigate(`/product/${params.row.id}`)}
            >
              View
            </Button>
          </Stack>
        );
      },
    },
  ];

  const handleDelete = (id)=>{
    dispatch(productsDelete(id))
  }

  return (
    <div style={{ height: 400, width: "100%" }} className="me-2">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection  disableRowSelectionOnClick/>
    </div>
  );
}
