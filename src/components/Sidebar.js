import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../utils/constans";
import { useNavigate, useParams } from "react-router-dom";
import { changeCategory } from "../redux/appSlice";

import { Stack } from "@mui/material";

const Sidebar = () => {
  const { category } = useSelector((state) => state.app);
  const dispach = useDispatch();
  const navigate = useNavigate();
  let path = useParams();
  useEffect(() => {
    if (path.category !== category) {
      dispach(changeCategory(path.category));
    }
  }, [category]);

  const handleClick = (e) => {
    dispach(changeCategory(e));
    navigate(`/${e}`);
  };
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", lg: "95%" },
        flexDirection: { lg: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          style={{
            backgroundColor: item.name === category && "#FC1503",
            color: "white",
          }}
          className="category-btn"
          key={item.name}
          onClick={() => handleClick(item.name)}
        >
          <span
            style={{
              color: item.name === category ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: item.name === category ? 1 : 0.8 }}>
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
