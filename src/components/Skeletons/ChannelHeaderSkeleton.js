import React from "react";
import { Box, Avatar, Grid, Skeleton } from "@mui/material";

export default function ChannelHeaderSkeleton() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "120px",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <Box sx={{ margin: 2 }}>
            <Skeleton variant="circular" animation="wave">
              <Avatar sx={{ width: 56, height: 56 }} />
            </Skeleton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Skeleton
              animation="wave"
              height={30}
              width="60%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={20} width="20%" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
