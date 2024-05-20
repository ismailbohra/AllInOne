import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";

export default function WarehouseAdminDrawerList() {
  const [selectedIndex, setSelectedIndex] = React.useState("Inventory-Dashboard");
  const navigate = useNavigate();

  const drawerItems = [
    {
      title: "Inventory",
      items: [
        {
          title: "Dashboard",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/inventory/Dashboard",
        },
        {
          title: "Orders",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/inventory/Orders",
        },
        {
          title: "Suppliers",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/inventory/Suppliers",
        },
        {
          title: "Stock Movement",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/inventory/StockMovement",
        },
        {
          title: "Receiving",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/inventory/Receiving",
        },
        {
          title: "Products",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/inventory/Products",
        },
      ],
    },
    {
      title: "HRM",
      items: [
        {
          title: "Employees",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/hrm/Employees",
        },
        {
          title: "Attendance",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/hrm/Attendance",
        },
        {
          title: "Payroll",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/hrm/Payroll",
        },
        {
          title: "Leave",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/hrm/Leave",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Warehouse Details",
          icon: <AssignmentIcon />,
          path: "/warehouseAdmin/settings/WarehouseDetails",
        },
      ],
    },
  ];

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    for (const section of drawerItems) {
      for (const item of section.items) {
        if (currentPath.includes(item.path)) {
          setSelectedIndex(`${section.title}-${item.title}`);
          break;
        }
      }
    }
  }, []);

  const handleNavigation = (value, subitem, item) => {
    setSelectedIndex(`${item}-${subitem}`);
    navigate(value);
  };

  const btnSelected = {
    backgroundColor: "#6FD943",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    marginBottom: "5px",
    animation: "none",
  };

  const btnNotSelected = {
    backgroundColor: "transparent",
    color: "black",
    borderRadius: "10px",
    boxShadow: "none",
    marginBottom: "5px",
    animation: "none",
  };

  return (
    <List
      sx={{ width: "100%", color: "black", paddingTop: "20px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {drawerItems.map((e, i) => (
        <div className="container pb-4" key={i}>
          <p className="container text-uppercase fw-bold">{e.title}</p>
          <List component="div">
            {e.items.map((item, index) => (
              <ListItemButton
                key={index}
                style={{
                  ...(selectedIndex === `${e.title}-${item.title}` && btnSelected),
                  ...(selectedIndex !== `${e.title}-${item.title}` && btnNotSelected),
                }}
                className="ismail"
                onClick={() => handleNavigation(item.path, item.title, e.title)}
              >
                <ListItemIcon
                  style={{
                    color:
                      selectedIndex === `${e.title}-${item.title}`
                        ? "#fff"
                        : "black",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className="sidebar-title"
                  primary={item.title}
                  style={{
                    color:
                      selectedIndex === `${e.title}-${item.title}`
                        ? "#fff"
                        : "black",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </div>
      ))}
    </List>
  );
}
