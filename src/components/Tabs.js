import React from "react";
import ChannelVideoList from "./Channel/ChannelVideoList";
import ChannelMain from "./Channel/ChannelMain";

import { Tabs, Tab, Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function TabsPanel({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="disabled tabs example"
        sx={{
          "& .MuiTab-root": { color: "white", opacity: 0.7 },
          ".Mui-selected": { opacity: 1 },
        }}
      >
        <Tab label="Головна" />
        <Tab label="Відео" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ChannelMain data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChannelVideoList />
      </TabPanel>
    </>
  );
}
