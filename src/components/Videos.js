import React from "react";
import VideoCard from "./VideoCard";

import { Stack, Box } from "@mui/material";

const Videos = ({ videos, direction }) => {
  //    if (!videos?.length) return <div>Loading</div>;

  return (
    <Stack
      direction={{ xs: "row", md: direction || "row" }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videos?.items?.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
