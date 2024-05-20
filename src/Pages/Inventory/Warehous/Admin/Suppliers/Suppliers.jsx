import React from 'react';
import { connect } from 'react-redux';

export const Suppliers = (props) => {
  return (
    <div>Suppliers</div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);
