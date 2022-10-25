import React from "react";
import { useParams } from "react-router-dom";
import { useGetChannelVideosQuery } from "../../servises/fetchApi";
import VideoCard from "../VideoCard";

import { Stack, Box } from "@mui/material";

const ChannelVideoList = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetChannelVideosQuery(id);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={1}
      p={1}
    >
      {data?.items &&
        data.items.map((video, i) => (
          <Box key={i}>
            {video.id.videoId && (
              <VideoCard video={video} isLoading={isLoading} />
            )}
          </Box>
        ))}
    </Stack>
  );
};

export default ChannelVideoList;
