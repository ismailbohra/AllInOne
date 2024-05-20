import React from 'react';
import { connect } from 'react-redux';

export const Payroll = (props) => {
  return (
    <div>Payroll</div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payroll);
