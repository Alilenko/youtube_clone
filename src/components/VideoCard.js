import React from "react";
import { Link } from "react-router-dom";
import { useTransformVideo } from "../utils/useTransformData";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constans";

import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = ({ video, isLoading }) => {
  const { id, title, cardImage, channelId, channelTitle } =
    useTransformVideo(video);

  return (
    <Card
      sx={{
        width: { xs: "92vw", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={id ? `/video/${id}` : demoVideoUrl} className="nav-link">
        <CardMedia
          image={cardImage}
          alt={title}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={id ? `/video/${id}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bolt" color="#fff">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bolt" color="gray">
            {channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
