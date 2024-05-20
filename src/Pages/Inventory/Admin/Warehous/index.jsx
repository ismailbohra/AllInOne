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
import { Container } from "@mui/material";
import CustomCard from "../../../../components/Card/CustomCard";

function AdminWareHouse(props) {
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

  const employeelist = ["ismail", "mufaddal", "hussain"];

  const shopColumn = [
    {
      accessorKey: "id",
      header: "Ware House",
      enableEditing: false,
      size: 80,
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
    { accessorKey: "address", header: "Address" },
    {
      accessorKey: "admin",
      header: "Admin",
      editVariant: "select",
      editSelectOptions: employeelist,
    },
  ];

  return (
    <Container>
      <CustomCard
        title="Warehouse"
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
            columns={shopColumn}
            validate={validateEmployee}
            renderCreateDialogTitle={() => "Create New Shop"}
            renderEditDialogTitle={() => "Edit Shop"}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminWareHouse);
