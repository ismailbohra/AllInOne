import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../../../../../components/Card/CustomCard";
import BarChart from "../../../../../components/Chart/CustomLinechart";
import { Avatar, Box, Typography } from "@mui/material";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { TimelineDot } from "@mui/lab";
import ArcDesign from "../../../../../components/Chart/Arc";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ViewOnlyTable from "../../../../../components/Table/viewOnlyTable";
import BasicTabView from "../../../../../components/Tabs/BasicTabview";



const company_overview = [
  {
    name: "Stock",
    value: 100,
    icon: <PeopleIcon />,
    color: "#6FD943",
  },
  {
    name: "Suppliers",
    value: 100,
    icon: <PeopleIcon />,
    color: "#3EC9D6",
  },
  {
    name: "Orders",
    value: 100,
    icon: <AttachMoneyIcon />,
    color: "#FFA21D",
  },
  {
    name: "Employee",
    value: 100,
    color: "#FF3A6E",
    icon: <AssignmentIcon />,
  },
];

const CompanyOverviewCard = ({ name, value, icon, color }) => (
  <Col md={3} xs={6}>
    <CustomCard
      element={
        <Box gap={1} display={"flex"} flexDirection={"column"}>
          <Avatar sx={{ bgcolor: color }}>{icon}</Avatar>
          <Typography fontSize={13} color={"#5A6A85"}>
            Total
          </Typography>
          <Typography fontSize={18} fontWeight={500}>
            {name}
          </Typography>
          <Typography fontSize={20} fontWeight={700}>
            {value}
          </Typography>
        </Box>
      }
    />
  </Col>
);
const MonthOverviewData = [
  {
    name: "Orders Today",
    value: 50,
    icon: <AssignmentIcon />,
    color: "#6FD943",
  },
  {
    name: "Receiving Today",
    value: 50,
    icon: <TextSnippetIcon />,
    color: "#3EC9D6",
  },
  {
    name: "Orders This Month",
    value: 50,
    icon: <AssignmentIcon />,
    color: "#FFA21D",
  },
  {
    name: "Receiving This Month",
    value: 50,
    icon: <TextSnippetIcon />,
    color: "#FF3A6E",
  },
];

const MonthOverview = (
  <Row className="gx-3 gy-3">
    {MonthOverviewData.map((e, Dashboard) => (
      <Col key={Dashboard} md={6} xs={12} className="d-flex align-items-center">
        <Avatar sx={{ bgcolor: e.color }}>{e.icon}</Avatar>
        <div className="ms-2">
          <Typography fontSize={12} fontWeight={500}>
            {e.name}
          </Typography>
          <Typography fontSize={12} fontWeight={700} sx={{ color: e.color }}>
            ${e.value}
          </Typography>
        </div>
      </Col>
    ))}
  </Row>
);

const invoiceDataH = ["Description", "Amount"];
const invoiceStatsDataR = [
  { Description: "Invoice", Amount: 159 },
  { Description: "Paid", Amount: 237 },
  { Description: "Due", Amount: 262 },
];
const billDataH = ["Description", "Amount"];
const billDataR = [
  { Description: "Invoice", Amount: 159 },
  { Description: "Paid", Amount: 237 },
  { Description: "Due", Amount: 262 },
];

const ArrLabelComponent = [
  {
    label: "Purchase",
    Component: (
      <ViewOnlyTable tablehead={invoiceDataH} tablerow={invoiceStatsDataR} />
    ),
  },
  {
    label: "Orders",
    Component: <ViewOnlyTable tablehead={billDataH} tablerow={billDataR} />,
  },
];
const employeeOverview = [
  {
    label: "Attendance",
    Component: (
      <ViewOnlyTable tablehead={invoiceDataH} tablerow={invoiceStatsDataR} />
    ),
  },
  {
    label: "Payroll",
    Component: <ViewOnlyTable tablehead={billDataH} tablerow={billDataR} />,
  },
];

const RecentInvoiceDataH = ["Customer", "Amount", "Date", "Status"];
const RecentInvoiceDataR = [
  { Customer: "Ismail Bohra", Amount: "100", Status: "Partial" },
  { Customer: "Ismail Bohra", Amount: "200", Status: "Partial" },
  { Customer: "Ismail Bohra", Amount: "300", Status: "Partial" },
  { Customer: "Ismail Bohra", Amount: "400", Status: "Partial" },
];
const LeaveDataH = ["S.No.", "Name", "Type", "From", "To", "Status"];
const LeaveDataR = [
  { "S.No.": "1", Name: "Ismail Bohra", Type: "casual", From:"24/11/2023" , To:"25/11/2023" , status:"Pending"},
  { "S.No.": "2", Name: "Ismail Bohra", Type: "casual", From:"24/11/2023" , To:"25/11/2023" , status:"Pending"},
  { "S.No.": "3", Name: "Ismail Bohra", Type: "casual", From:"24/11/2023" , To:"25/11/2023" , status:"Pending"},
  { "S.No.": "4", Name: "Ismail Bohra", Type: "casual", From:"24/11/2023" , To:"25/11/2023" , status:"Pending"},
];

function Dashboard() {
  return (
    <Container>
      <Row className="gy-4">
        <Col md={8}>
          <Row className="gx-2 gy-2">
            {company_overview.map((item, Dashboard) => (
              <CompanyOverviewCard key={Dashboard} {...item} />
            ))}
          </Row>
          {/* recentorder card */}
          <Row className="mt-4">
            <CustomCard
              title="Recent Orders"
              nopadding={true}
              titleproperty={{
                variant: "h5",
                padding: 2,
                paddingLeft: 3,
                fontSize: 20,
                fontWeight: 800,
              }}
              element={
                <ViewOnlyTable
                  tablehead={RecentInvoiceDataH}
                  tablerow={RecentInvoiceDataR}
                />
              }
              divider={0}
            />
          </Row>
          {/* leave card */}
          <Row style={{marginTop:"1rem"}}>
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
              element={
                <ViewOnlyTable tablehead={LeaveDataH} tablerow={LeaveDataR} />
              }
              divider={0}
            />
          </Row>
        </Col>
        <Col md={4}>
          <Box sx={{ marginBottom: "20px" }}>
            <CustomCard
              title={"Month Overview"}
              element={MonthOverview}
              titleproperty={{
                variant: "h5",
                paddingBottom: 1,
                paddingLeft: 1,
                fontSize: 16,
                fontWeight: 500,
              }}
            />
          </Box>

          <Box>
            <CustomCard
              element={<BasicTabView ArrLabelComponent={ArrLabelComponent} />}
            />
          </Box>
          
          <Box sx={{marginTop:"1rem"}}>
            <CustomCard
              element={<BasicTabView ArrLabelComponent={employeeOverview} />}
            />
          </Box>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
