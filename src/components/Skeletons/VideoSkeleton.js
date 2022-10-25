import React from "react";
import { Skeleton, Box, Grid } from "@mui/material";

const VideoSkeleton = () => {
  return (
    <Grid item p={2}>
      <Skeleton variant="rectangular" width={320} height={180} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Grid>
  );
};

export default VideoSkeleton;
