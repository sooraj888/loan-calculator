import React from "react";
import { Button, Container, Typography } from "@mui/material";

const ErrorPage = () => (
  <Container
    sx={{
      textAlign: "center",
      width: "100vw",
      height: "100vh",
      display: "flex",
    }}
  >
    <Typography variant="h4" color="error" sx={{ margin: "auto" }}>
      Something went wrong!
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

export default ErrorPage;
