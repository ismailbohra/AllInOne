import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

export const Warehouse = (props) => {
  return (
    <>
      <Outlet/>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Warehouse);
