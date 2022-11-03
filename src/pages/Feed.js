import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetVideoQuery } from "../servises/fetchApi";
import VideoList from "../components/VideoList";
import VideoSkeleton from "../components/Skeletons/VideoSkeleton";
import SideComponent from "../components/SideComponent";

import { Box, Grid, Typography } from "@mui/material";
import NotFound from "../components/error/NotFound";

const Feed = () => {
  const { category } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const { data, isLoading, error, isFetching } = useGetVideoQuery(category);

  useEffect(() => {
    navigate(`/${category}`);
  }, []);

  return (
    <SideComponent>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {category} <span style={{ color: "#F31503" }}>video</span>
        </Typography>
        {error ? <NotFound /> : null}
        {isFetching ? (
          <Grid container spacing={2} direction="row" wrap="wrap">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
              <VideoSkeleton key={item} />
            ))}
          </Grid>
        ) : (
          data?.items.length && (
            <VideoList videos={data.items} isLoading={isLoading} />
          )
        )}
      </Box>
    </SideComponent>
  );
};

export default Feed;
