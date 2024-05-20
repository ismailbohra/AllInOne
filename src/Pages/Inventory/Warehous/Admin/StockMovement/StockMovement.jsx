import React from 'react';
import { connect } from 'react-redux';

export const StockMovement = (props) => {
  return (
    <div>StockMovement</div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StockMovement);
