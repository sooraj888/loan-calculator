import React, { useState } from "react";
import {
  Drawer,
  List,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";

export const navigationRouteArray = [
  { name: "Home", routName: "/" },
  { name: "Exchange Rate (Live)", routName: "/exchange_rates_live" },
];

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pageName = location.pathname;

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            display: { xs: "inline-flex", sm: "none" },
            color: "white",
          }}
        />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {navigationRouteArray.map((navObject) => (
            <ListItemButton
              key={navObject.name}
              selected={navObject.routName === pageName}
              sx={{
                minWidth: "15rem",
                margin: "0.1rem 0px 0.1rem 0.4rem",
                borderEndStartRadius: "0.5rem",
                borderStartStartRadius: "0.5rem",
                padding: "0.8rem",
                "&.Mui-selected": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#1976d2",
                  color: "black",
                },
              }}
              onClick={() => {
                navigate(navObject?.routName);
              }}
            >
              <Typography>{navObject.name}</Typography>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
