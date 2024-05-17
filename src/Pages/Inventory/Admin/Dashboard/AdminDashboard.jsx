import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../../../../components/Card/CustomCard";
import BarChart from "../../../../components/Chart/CustomLinechart";
import { Avatar, Box, Typography } from "@mui/material";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { TimelineDot } from "@mui/lab";
import ArcDesign from "../../../../components/Chart/Arc";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ViewOnlyTable from "../../../../components/Table/viewOnlyTable";
import BasicTabView from "../../../../components/Tabs/BasicTabview";

const Card = (e) => (
  <>
    <Row style={{ height: "50%" }}>
      <Col md={6}>
        <Typography fontSize={16} fontWeight={500}>
          {e.name}
        </Typography>
        <br />
        <Typography fontSize={20} fontWeight={800}>
          ${e.total}
        </Typography>
        <Box
          sx={{ marginTop: "5px" }}
          display={"flex"}
          gap={0.5}
          flexDirection={"row"}
        >
          <Avatar
            sx={{
              width: 18,
              height: 18,
              color: "#39B69A",
              background: "#E6FFFA",
            }}
          >
            <NorthWestIcon sx={{ width: 14, height: 14 }} />
          </Avatar>
          <Typography fontSize={13} fontWeight={700}>
            {e.percentage}%
          </Typography>
          <Typography fontSize={13} color={"#5A6A85"}>
            {e.percentageof}
          </Typography>
        </Box>
        <br />
        <Box display={"flex"} flexDirection={"row"} gap={3}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={1}
            alignItems={"center"}
          >
            <TimelineDot color="primary" />
            {e.from}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={1}
            alignItems={"center"}
          >
            <TimelineDot color="primary" sx={{ opacity: 0.5 }} />
            {e.to}
          </Box>
        </Box>
      </Col>
      <Col md={6}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <ArcDesign
            settings={{
              width: 150,
              height: 150,
              value: e.arcvalue,
            }}
          />
        </Box>
      </Col>
    </Row>
  </>
);

const breakupdata = [
  {
    name: "Yearly Breakup",
    total: "36,358",
    percentage: "+9",
    percentageof: "last year",
    from: "2022",
    to: "2023",
    arcvalue: 45,
  },
  {
    name: "Monthly Breakup",
    total: "2,358",
    percentage: "+60",
    percentageof: "last Month",
    from: "April",
    to: "May",
    arcvalue: 80,
  },
];

const company_overview = [
  {
    name: "Customer",
    value: 100,
    icon: <PeopleIcon />,
    color: "#6FD943",
  },
  {
    name: "Supplier",
    value: 100,
    icon: <PeopleIcon />,
    color: "#3EC9D6",
  },
  {
    name: "Sales",
    value: 100,
    icon: <AttachMoneyIcon />,
    color: "#FFA21D",
  },
  {
    name: "Invoice",
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
    name: "Income Today",
    value: 50,
    icon: <AssignmentIcon />,
    color: "#6FD943",
  },
  {
    name: "Expense Today",
    value: 50,
    icon: <TextSnippetIcon />,
    color: "#3EC9D6",
  },
  {
    name: "Income This Month",
    value: 50,
    icon: <AssignmentIcon />,
    color: "#FFA21D",
  },
  {
    name: "Expense This Month",
    value: 50,
    icon: <TextSnippetIcon />,
    color: "#FF3A6E",
  },
];

const MonthOverview = (
  <Row className="gx-3 gy-3">
    {MonthOverviewData.map((e, index) => (
      <Col key={index} md={6} xs={12} className="d-flex align-items-center">
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
  { Description: "Invoice", Calories: 159 },
  { Description: "Paid", Calories: 237 },
  { Description: "Due", Calories: 262 },
];
const billDataH = ["Description", "Amount"];
const billDataR = [
  { Description: "Bill", Calories: 159 },
  { Description: "Paid", Calories: 237 },
  { Description: "Due", Calories: 262 },
];

const ArrLabelComponent = [
  {
    label: "Invoice",
    Component: (
      <ViewOnlyTable tablehead={invoiceDataH} tablerow={invoiceStatsDataR} />
    ),
  },
  {
    label: "Bill",
    Component: <ViewOnlyTable tablehead={billDataH} tablerow={billDataR} />,
  },
];

const RecentInvoiceDataH = ["S.No.", "Customer", "Amount", "Date", "Status"];
const RecentInvoiceDataR = [
  { "S.No.": "1", Customer: "Ismail Bohra", Amount: "100", Status: "Partial" },
  { "S.No.": "2", Customer: "Ismail Bohra", Amount: "200", Status: "Partial" },
  { "S.No.": "3", Customer: "Ismail Bohra", Amount: "300", Status: "Partial" },
  { "S.No.": "4", Customer: "Ismail Bohra", Amount: "400", Status: "Partial" },
];

function Index() {
  return (
    <Container>
      <Row className="gy-4">
        <Col md={8}>
          <Row className="gx-2 gy-2">
            {company_overview.map((item, index) => (
              <CompanyOverviewCard key={index} {...item} />
            ))}
          </Row>
          <Row className="mt-4">
            <CustomCard
              title={"Sales Overview"}
              element={<BarChart />}
              titleproperty={{
                variant: "h5",
                paddingBottom: 2,
                paddingLeft: 1,
                fontSize: 20,
                fontWeight: 800,
              }}
            />
          </Row>
          <Row className="mt-4">
            <CustomCard
              title="Recent Invoice"
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
        </Col>
        <Col md={4}>
          {breakupdata.map((e, index) => (
            <Box key={index} sx={{ marginBottom: "20px" }}>
              <CustomCard element={<Card {...e} />} />
            </Box>
          ))}

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
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
