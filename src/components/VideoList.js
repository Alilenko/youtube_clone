import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

import { Stack, Box } from "@mui/material";

const VideoList = ({ videos, isLoading }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((video, i) => (
        <Box key={i}>
          {video.id.videoId && (
            <VideoCard video={video} isLoading={isLoading} />
          )}
          {video?.id.channelId && (
            <ChannelCard channelDetail={video} isLoading={isLoading} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default VideoList;
