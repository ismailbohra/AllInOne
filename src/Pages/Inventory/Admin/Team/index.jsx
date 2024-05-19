import React from "react";
import { bindActionCreators } from "redux";

import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../../../redux/employee/EmployeeAction";
import CrudMaterialReactTable from "../../../../components/Table/CrudMaterialReactTable";
import { connect } from "react-redux";
import { createEmployeeSchema } from "../../../../utils/validations";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import CustomCard from "../../../../components/Card/CustomCard";

// const validateEmployee = (values) => {
//   const errors = {};
//   if (!values.name) errors.name = "Name is required";
//   if (!values.email) errors.email = "Email is required";
//   return errors;
// };

function AdminTeam(props) {
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

  const employeeColumns = [
    {
      accessorKey: "employeeId",
      header: "Employee ID",
      enableEditing: false,
      size: 80,
      Cell: ({ renderedCellValue, row }) => {
        return (
          <Link to={`/employee/${row.original.employeeId}`}>
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
    { accessorKey: "email", header: "Email" },
    { accessorKey: "warehouse", header: "Warehouse" },
    { accessorKey: "shop", header: "Shop" },
    { accessorKey: "designation", header: "Designation" },
    { accessorKey: "dateOfJoining", header: "Date Of Joining" },
  ];

  return (
    <Container>
      <CustomCard
        title="Team"
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
            renderCreateDialogTitle={() => "Create New Employee"}
            renderEditDialogTitle={() => "Edit Employee"}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminTeam);
