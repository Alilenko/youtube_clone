import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

import { Box, Stack } from "@mui/material";

const SideComponent = ({ children }) => {
  const { category } = useSelector((state) => state.app);

  return (
    <Stack sx={{ flexDirection: { sx: "column", lg: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", lg: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, lg: 2 },
        }}
      >
        <Sidebar />
      </Box>
      {children}
    </Stack>
  );
};

export default SideComponent;
