import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";
import SideMenu, { navigationRouteArray } from "./SideMenu";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggleTheme, mode } = useThemeContext();

  const navigate = useNavigate();
  const location = useLocation();
  const pageName = location.pathname;

  return (
    <AppBar position="static">
      <Toolbar>
        <SideMenu />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <ToggleButtonGroup
          sx={{ display: { xs: "none", sm: "flex" } }}
          value={pageName}
        >
          {navigationRouteArray.map((navObject) => (
            <ToggleButton
              value={navObject.routName}
              variant="contained"
              sx={{
                color: "white",
                padding: "0.5rem",
                margin: "0px 1rem",
                border: "1px solid white !important",
                borderRadius: "0.5rem !important",
                "&.Mui-selected": {
                  backgroundColor: "#3683D0",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#3683D0",
                  },
                },
              }}
              onClick={() => {
                navigate(navObject?.routName);
              }}
              key={navObject.name}
            >
              {navObject.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Switch onChange={toggleTheme} defaultChecked={mode == "dark"} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
