// CrudMaterialReactTable.js
import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CrudMaterialReactTable = ({
  fetchAction,
  createAction,
  updateAction,
  deleteAction,
  selector,
  columns,
  validate,
  renderCreateDialogTitle,
  renderEditDialogTitle,
  setValidationErrors,
  iscreate=true
}) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selector);

  useEffect(() => {
    console.log("dispatch fetch action");
    dispatch(fetchAction());
  }, [dispatch, fetchAction]);

  const handleCreate = async ({ values, table }) => {
    const newValidationErrors = await validate(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    dispatch(createAction(values));
    table.setCreatingRow(null);
  };

  const handleSave = async ({ values, table }) => {
    const newValidationErrors = await validate(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    dispatch(updateAction(values));
    table.setEditingRow(null);
  };

  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deleteAction(row.original.id));
    }
  };

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "14px",
        bgcolor: "#F8F9FD",
      },
    },
    enableRowNumbers: true,
    positionActionsColumn: "last",
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: error
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreate,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSave,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">{renderCreateDialogTitle()}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">{renderEditDialogTitle()}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) =>
      iscreate ? (
        <Button
          variant="contained"
          sx={{ bgcolor: "#6FD943" }}
          onClick={() => table.setCreatingRow(true)}
        >
          Create New
        </Button>
      ) : null,
    state: {
      isLoading: loading,
      showAlertBanner: error,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default CrudMaterialReactTable;
