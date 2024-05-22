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

function Leave(props) {
  const [validationErrors, setValidationErrors] = React.useState({});

  const validateEmployee = async (values) => {
    
  };

  const statuslist = ["Accepted", "Rejected", "Pending"];

  const employeeColumns = [
    {
      accessorKey: "employeeId",
      header: "Emp Id",
      enableEditing: false,
      size: 80,
      Cell: ({ renderedCellValue, row }) => {
        return (
          <Link to={`/warehouseAdmin/inventory/Leave/${row.original.employeeId}`}>
            {renderedCellValue}
          </Link>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      enableEditing: false,
    },
    {
      accessorKey: "from",
      header: "From",
    },
    {
      accessorKey: "To",
      header: "To",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "status",
      header: "Status",
      editVariant: "select",
      editSelectOptions: statuslist,
    },
  ];

  return (
    <Container>
      <CustomCard
        title="Leave"
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

export default connect(mapStateToProps, mapDispatchToProps)(Leave);
