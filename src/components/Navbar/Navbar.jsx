import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Image } from "react-bootstrap";
import logo from "../../assets/logo/dark-logo.svg";
import Cbutton from "../Button/Cbutton";
import AdminDrawerList from "./admin/admin";
import { Outlet } from "react-router-dom";
import "./navbar.scss";

const drawerWidth = 280;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "windowsize",
})(({ theme, open, windowsize }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "windowsize",
})(({ theme, open, windowsize }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    windowsize > 600 && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  background: "white",
  boxShadow: "none",
  borderBottom: "2px solid black",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [windowsize, setwindowsize] = React.useState(window.innerWidth);

  const handleResize = () => {
    setwindowsize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (windowsize < 600) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [windowsize]);

  const handleDrawerOpen = () => {
    setOpen((e) => !e);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        windowsize={windowsize}
        className="appbar"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Cbutton />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          ...(open && {width: drawerWidth}),
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={windowsize > 600 ? "persistent" : "temporary"}
        anchor="left"
        open={open}
        windowsize={windowsize}
      >
        <DrawerHeader>
          <Image src={logo} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <AdminDrawerList />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
