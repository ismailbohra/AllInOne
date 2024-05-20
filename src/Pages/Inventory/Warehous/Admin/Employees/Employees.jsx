import React from 'react';
import { connect } from 'react-redux';

export const Employees = (props) => {
  return (
    <div>Employees</div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
