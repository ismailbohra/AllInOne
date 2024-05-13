import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ChevronRight from "@mui/icons-material/ChevronRight";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminDrawerList() {
  const [selectedIndex, setSelectedIndex] = React.useState("home");
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (value) => {
    navigate(value);
    setSelectedIndex(value);
  };

  const drawerItems = [
    {
      title: "Inventory",
      icon: <FileCopyIcon style={{ color: "black" }} />,
      items: [
        { title: "Dashboard", icon: <AssignmentIcon />, path: "/admin" },
        { title: "Team", icon: <AssignmentIcon />, path: "/admin/Team" },
        { title: "Shop", icon: <CheckBoxIcon />, path: "/admin/Shop" },
        { title: "Warehouse", icon: <CheckBoxIcon />, path: "/admin/Warehouse" },
      ],
    },
    {
      title: "HRM System",
      icon: <FileCopyIcon style={{ color: "black" }} />,
      items: [
        { title: "Dashboard", icon: <AssignmentIcon />, path: "/" },
        { title: "Team", icon: <AssignmentIcon />, path: "Team" },
        { title: "Shop", icon: <CheckBoxIcon />, path: "Shop" },
        { title: "Warehouse", icon: <CheckBoxIcon />, path: "Warehouse" },
      ],
    },
  ];

  return (
    <List
      sx={{ width: "100%", color: "black", paddingTop: "25px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      dense={false}
    >
      {drawerItems.map((drawerItem, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            onClick={() => handleItemClick(index)}
            sx={{
              boxShadow: 1,
              marginInline: 2,
              borderRadius: 3,
              marginTop: 2,
            }}
          >
            <ListItemIcon>{drawerItem.icon}</ListItemIcon>
            <ListItemText primary={drawerItem.title} />
            {openIndex === index ? <ExpandLess /> : <ChevronRight />}
          </ListItemButton>
          <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {drawerItem.items.map((item, itemIndex) => (
                <ListItemButton
                  key={itemIndex}
                  style={
                    selectedIndex === item.title
                      ? { color: "#F2B33F" }
                      : { color: "black" }
                  }
                  sx={{ pl: 4 }}
                  onClick={() => {
                    handleNavigation(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
