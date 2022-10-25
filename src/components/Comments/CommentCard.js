import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useTransformComment } from "../../utils/useTransformData";

import { Box, Card, CardContent, Avatar, Typography } from "@mui/material";

const CommentCard = ({ comment }) => {
  const { authorName, authorChannelUrl, profileImg, text, publishedAt } =
    useTransformComment(comment);

  return (
    <Card sx={{ backgroundColor: "bgColor.main", margin: "0px 10px" }}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Avatar src={profileImg} alt={authorName} />
        </Box>
        <Box pl={2}>
          <Box sx={{ display: "flex" }}>
            <Typography
              component={Link}
              to={`/channel/${authorChannelUrl}`}
              color="primary"
              variant="body1"
            >
              Shrimp and Chorizo Paella
            </Typography>
            <Typography variant="subtitle2" color="gray" pl={2}>
              {format(publishedAt)}
            </Typography>
          </Box>
          <Typography color="primary" variant="body2">
            {text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
