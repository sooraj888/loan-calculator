import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Switch onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
