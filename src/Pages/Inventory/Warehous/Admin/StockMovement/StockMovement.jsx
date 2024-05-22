import React from "react";
import { Container } from "@mui/material";
import { connect } from "react-redux";
import CustomCard from "../../../../../components/Card/CustomCard";

function Suppliers() {
  return (
    <Container>
      <CustomCard
        title="Suppliers"
        nopadding={true}
        titleproperty={{
          variant: "h5",
          padding: 2,
          paddingLeft: 3,
          fontSize: 20,
          fontWeight: 800,
        }}
        divider={0}
        element={<>Transfer Goods In Between Warehouse</>}
      />
    </Container>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);
