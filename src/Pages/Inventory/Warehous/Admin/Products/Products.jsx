import React from "react";
import { bindActionCreators } from "redux";

import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../../../../redux/employee/EmployeeAction";
import CrudMaterialReactTable from "../../../../../components/Table/CrudMaterialReactTable";
import { connect } from "react-redux";
import { createEmployeeSchema } from "../../../../../utils/validations";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import CustomCard from "../../../../../components/Card/CustomCard";

function Suppliers(props) {
  const [validationErrors, setValidationErrors] = React.useState({});

  const validateEmployee = async (values) => {
    try {
      await createEmployeeSchema.validate(values, { abortEarly: false });
      setValidationErrors({});
    } catch (errors) {
      console.log(typeof errors.inner);
      const validationErrors = {};
      errors.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      console.log(validationErrors);
      setValidationErrors(validationErrors);
    }
  };

  const statuslist = ["Accepted", "Transfered", "Received"];

  const employeeColumns = [
    {
      accessorKey: "productId",
      header: "Product Id",
      enableEditing: false,
      size: 80,
      Cell: ({ renderedCellValue, row }) => {
        return (
          <Link to={`/warehouseAdmin/inventory/Suppliers/${row.original.employeeId}`}>
            {renderedCellValue}
          </Link>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      muiEditTextFieldProps: {
        required: true,
        error: !!validationErrors?.name,
        helperText: validationErrors?.name,
        onFocus: () =>
          setValidationErrors({
            ...validationErrors,
            name: undefined,
          }),
      },
    },
    {
      accessorKey: "Description",
      header: "Description",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "costprice",
      header: "Cost Price",
    },
    {
      accessorKey: "salesprice",
      header: "Sales Price",
    },
    {
      accessorKey: "tax",
      header: "Tax",
    },
  ];

  return (
    <Container>
      <CustomCard
        title="Suppliers"
        nopadding={true}
        titleproperty={{
          variant: "h5",
          padding: 2,
          paddingLeft: 3,
          fontSize: 20,
          fontWeight: 800,
        }}
        divider={0}
        element={
          <CrudMaterialReactTable
            fetchAction={props.fetchEmployees}
            createAction={props.createEmployee}
            updateAction={props.updateEmployee}
            deleteAction={props.deleteEmployee}
            selector={(state) => state.Employee}
            columns={employeeColumns}
            validate={validateEmployee}
            renderCreateDialogTitle={() => ""}
            renderEditDialogTitle={() => "Update Order"}
            setValidationErrors={setValidationErrors}
            iscreate={false}
          />
        }
      />
    </Container>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: bindActionCreators(fetchEmployees, dispatch),
  createEmployee: bindActionCreators(createEmployee, dispatch),
  updateEmployee: bindActionCreators(updateEmployee, dispatch),
  deleteEmployee: bindActionCreators(deleteEmployee, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);
