import React from "react";
import { useTransformChannel } from "../../utils/useTransformData";

import { Button, Grid, Typography, Avatar } from "@mui/material";

const ChannelHeader = ({ data }) => {
  const { title, avatar, subscribers } = useTransformChannel(data);

  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        p={2}
        sx={{
          maxHeight: { xs: "auto", md: "120px" },
          backgroundColor: "bgColor.dark",
        }}
        alignItems="center"
      >
        <Grid
          item
          container
          columnSpacing={2}
          xs="auto"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item alignSelf="center">
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="Travis Howard"
              src={avatar}
            />
          </Grid>
          <Grid item>
            <Typography
              color="primary"
              variant="h4"
              sx={{ width: { xs: "250px", sm: "auto" } }}
            >
              {title}
            </Typography>
            <Typography color="gray">
              {parseInt(subscribers).toLocaleString("en-US")} subscribers
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Підписатися
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ChannelHeader;
