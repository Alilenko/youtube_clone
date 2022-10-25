import React from "react";
import { useTransformChannel } from "../../utils/useTransformData";
import TrailerCard from "./TrailerCard";

const ChannelMain = ({ data }) => {
  const { trailer } = useTransformChannel(data);

  return <>{data?.items && <TrailerCard id={trailer}></TrailerCard>}</>;
};

export default ChannelMain;
