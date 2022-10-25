import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useGetVideoDetailsQuery } from "../../servises/fetchApi";
import { useTransformVideoDetails } from "../../utils/useTransformData";
import { demoVideoUrl } from "../../utils/constans";

import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TrailerCard({ id }) {
  const { data } = useGetVideoDetailsQuery(id);

  return <>{data?.items && <ContentView data={data} />}</>;
}

const ContentView = ({ data }) => {
  const { id, title, description } = useTransformVideoDetails(data);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "bgColor.main",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <ReactPlayer
        url={
          `https://www.youtube.com/watch?v=${id}` ||
          `https://www.youtube.com/watch?v=${demoVideoUrl}`
        }
        className="react-player"
        controls
      />
      <CardContent sx={{ maxWidth: { xs: "100%", md: "40%" } }}>
        <Typography color="primary" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {isOpen ? (
          <Typography color="primary" variant="body2">
            {description}
          </Typography>
        ) : null}
        {description.length > 400 && !isOpen ? (
          <>
            <Typography color="primary" variant="body2">
              {description.slice(0, 400)}...
            </Typography>
            <Button onClick={() => setIsOpen(true)} variant="text" size="small">
              Читати більше
            </Button>
          </>
        ) : (
          <Typography color="primary" variant="body2">
            description
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
