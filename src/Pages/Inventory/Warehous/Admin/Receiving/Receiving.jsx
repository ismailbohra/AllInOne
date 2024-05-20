import React from 'react';
import { connect } from 'react-redux';

export const Receiving = (props) => {
  return (
    <div>Receiving</div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Receiving);
