import React from "react";
import { useNavigate } from "react-router";
import img from "../../assets/fatal.png";
import { Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <img src={img} alt="not found" />
        <div
          style={{
            color: "white",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Opps... Something went wrong
        </div>
        <Button
          onClick={() => navigate("/")}
          color="secondary"
          variant="contained"
          sx={{ margin: "10px 0" }}
        >
          Main Page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
