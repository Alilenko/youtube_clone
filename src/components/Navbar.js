import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constans";
import SearchInput from "./Search";

import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      bgcolor="bgColor.light"
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <Link to="/" style={{ display: "flex", alingItems: "center" }}>
        <img src={logo} height={45} alt="logo" />
      </Link>
      <SearchInput />
    </Stack>
  );
};

export default Navbar;
