import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function BasicTabView({ ArrLabelComponent }) {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1 ,marginBottom:1, borderColor: "divider" }}>
          <TabList centered onChange={handleChange} aria-label="lab API tabs example">
            {ArrLabelComponent.map((e, index) => (
              <Tab key={index} label={e.label} value={`${index}`} />
            ))}
          </TabList>
        </Box>
        {ArrLabelComponent.map((e, index) => (
          <TabPanel sx={{padding:0}} key={index} value={`${index}`}>
            {e.Component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
