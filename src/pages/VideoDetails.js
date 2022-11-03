import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useTransformVideoDetails } from "../utils/useTransformData";
import {
  useGetVideoDetailsQuery,
  useGetVideoRelatedQuery,
} from "../servises/fetchApi";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constans";
import Videos from "../components/Videos";
import CommentsList from "../components/Comments/ComentsList";

import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotFound from "../components/error/NotFound";

const VideoDetails = () => {
  const { videoId } = useParams();

  const { data, isLoading, isFetching, error } =
    useGetVideoDetailsQuery(videoId);

  if (isLoading || isFetching) {
    return <div>Loading</div>;
  }
  if (error) {
    return <NotFound />;
  }

  return <>{data.items ? <View video={data} videoId={videoId} /> : null}</>;
};
const View = ({ video, videoId }) => {
  const {
    id,
    title,
    description,
    channelId,
    channelTitle,
    viewCount,
    likeCount,
    comments,
  } = useTransformVideoDetails(video);

  const { data } = useGetVideoRelatedQuery(videoId);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={
                `https://www.youtube.com/watch?v=${id}` ||
                `https://www.youtube.com/watch?v=${demoVideoUrl}`
              }
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title || demoVideoTitle}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link
                to={`/channel/${channelId}` || `/channel/${demoChannelUrl}`}
              >
                <Typography variant="subtitle1" color="#fff">
                  {channelTitle || demoChannelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount || 0).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount || 0).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Typography p={2} variant="subtitle1">
              {description}
            </Typography>
            <Typography p={2} variant="subtitle1">
              {comments} Comments
            </Typography>
            <CommentsList id={videoId} />
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {data?.items ? <Videos videos={data} direction="column" /> : null}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
