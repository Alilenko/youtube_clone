import React from "react";
import { useGetCommentsQuery } from "../../servises/fetchApi";
import CommentCard from "./CommentCard";

const ComentsList = ({ id }) => {
  const { data } = useGetCommentsQuery(id);

  return (
    <div>
      {data?.items
        ? data.items.map((item, i) => <CommentCard key={i} comment={item} />)
        : null}
    </div>
  );
};

export default ComentsList;
