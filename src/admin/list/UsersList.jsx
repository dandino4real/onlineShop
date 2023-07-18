import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { userDelete, usersFetch } from "../../features/userSlice";

export default function UsersList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(usersFetch());
  }, [dispatch]);

  const rows =
    list &&
    list.map((user) => {
      return {
        id: user._id,
        uName: user.name,
        uEmail: user.email,
        isAdmin: user.isAdmin,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "uName",
      headerName: "Name",
      width: 200,
    },
    { field: "uEmail", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 80,
      renderCell: (params) => {
        return (
        <div>
          {params.row.isAdmin ? ( <div>Admin</div>)  : (<div>User</div> )}
        </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => navigate(`/user/${params.row.id}`)}
            >
              View
            </Button>
          </Stack>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    dispatch(userDelete (id));
  };

  return (
    <div style={{ height: 400, width: "100%" }} className="me-2">
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
