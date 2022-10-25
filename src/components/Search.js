import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSearch } from "../redux/appSlice";

import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispach = useDispatch();
  const navigate = useNavigate();

  const onChange = () => {
    dispach(changeSearch(search));
    navigate(`/search/${search}`);
  };

  return (
    <Paper
      component="form"
      onSubmit={onChange}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 3,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
        placeholder="Search.."
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
