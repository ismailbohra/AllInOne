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

function Employee(props) {
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

  const statuslist = ["Active", "Inactive"];

  const employeeColumns = [
    {
      accessorKey: "employeeId",
      header: "Emp Id",
      enableEditing: false,
      size: 80,
      Cell: ({ renderedCellValue, row }) => {
        return (
          <Link to={`/warehouseAdmin/inventory/Employee/${row.original.employeeId}`}>
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
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "designation",
      header: "Designation",
    },
    {
      accessorKey: "salary",
      header: "Salary",
    },
    {
      accessorKey: "status",
      header: "Status",
      editVariant: "select",
      editSelectOptions: statuslist,
    },
    {
      accessorKey: "Attendance",
      header: "Attendance",
      enableEditing: false,
    },
    {
      accessorKey: "password",
      header: "Password",
    },
  ];

  return (
    <Container>
      <CustomCard
        title="Employee"
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

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
