import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../servises/fetchApi";
import VideoList from "../components/VideoList";
import VideoSkeleton from "../components/Skeletons/VideoSkeleton";
import SideComponent from "../components/SideComponent";

import { Box, Grid, Typography } from "@mui/material";
import NotFound from "../components/error/NotFound";

const SearchFeed = () => {
  const { search } = useParams();
  
  const { data, isLoading, error, isFetching } = useGetVideoQuery(search);

  return (
    <SideComponent>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {search} <span style={{ color: "#F31503" }}>video</span>
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

export default SearchFeed;
