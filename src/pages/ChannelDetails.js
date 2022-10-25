import React from "react";
import { useParams } from "react-router-dom";
import { useGetChannelQuery } from "../servises/fetchApi";
import ChannelHeader from "../components/Channel/ChannelHeader";
import SideComponent from "../components/SideComponent";
import ChannelHeaderSkeleton from "../components/Skeletons/ChannelHeaderSkeleton";
import TabsPanel from "../components/Tabs";

import { Grid, Box } from "@mui/material";

const ChannelDetails = () => {
  const { id } = useParams();
  const { data, isFetching, isLoading, error } = useGetChannelQuery(id);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <SideComponent>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Grid container direction="column">
          <Grid item>
            {isFetching || isLoading ? <ChannelHeaderSkeleton /> : null}
            {data?.items ? <ChannelHeader data={data} /> : null}
          </Grid>
          <Grid item>{data?.items && <TabsPanel data={data} />}</Grid>
        </Grid>
      </Box>
    </SideComponent>
  );
};

export default ChannelDetails;
