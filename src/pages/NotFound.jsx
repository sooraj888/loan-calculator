import React from "react";
import { Button, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <Typography variant="h3" sx={{ margin: "auto" }}>
        404 - Page Not Found
        <Button
          sx={{ display: "block", margin: "10px auto" }}
          variant="outlined"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go Home
        </Button>
      </Typography>
    </Container>
  );
};

export default NotFound;
