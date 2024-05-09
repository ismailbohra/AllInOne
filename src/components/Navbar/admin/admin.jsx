import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLess from "@mui/icons-material/ExpandLess";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

export default function AdminDrawerList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation;
  const handleNavigation = (value) => {
    navigate(value);
    setSelectedIndex(value);
  };
  const [selectedIndex, setSelectedIndex] = React.useState("home");

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{
        color: "black",
        paddingTop: 25,
      }}
    >
      <ListItemButton onClick={handleClick} className="listitembutton">
        <ListItemIcon>
          <FileCopyIcon style={{ color: "black" }} />
        </ListItemIcon>
        <ListItemText primary="lms" />
        {open ? <ExpandLess /> : <ChevronRight />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            style={
              selectedIndex === "leaveApply"
                ? { color: "#F2B33F" }
                : { color: "black" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("leaveApply");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon
                style={
                  selectedIndex === "leaveApply"
                    ? { color: "#F2B33F" }
                    : { color: "black" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Leave Apply" />
          </ListItemButton>

          <ListItemButton
            style={
              selectedIndex === "leaveChart"
                ? { color: "#F2B33F" }
                : { color: "black" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("leaveChart");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon
                style={
                  selectedIndex === "leaveChart"
                    ? { color: "#F2B33F" }
                    : { color: "black" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Leave Chart" />
          </ListItemButton>

          <ListItemButton
            style={
              selectedIndex === "facultyAssignment"
                ? { color: "#F2B33F" }
                : { color: "black" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("facultyAssignment");
            }}
          >
            <ListItemIcon>
              <CheckBoxIcon
                style={
                  selectedIndex === "facultyAssignment"
                    ? { color: "#F2B33F" }
                    : { color: "black" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Faculty Assignment" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
