import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, height: "10vh" }}>
        <AppBar position="static" sx={{backgroundColor: "#0077B6"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{
              flexGrow: 1,
              fontWeight: "bold"
            }}>
              Awesome Website
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
