import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const header = {
  "X-RapidAPI-Key": "4ee25891a1mshd216869eb486c16p188e1cjsn12f41799c81b",
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://youtube-v31.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getVideo: builder.query({
      query: (category) => ({
        headers: header,
        url: "/search",
        params: {
          maxResults: "50",
          part: "snippet,id",
          q: category,
        },
      }),
    }),
    getVideoDetails: builder.query({
      query: (id) => ({
        headers: header,
        url: "videos",
        params: {
          part: "contentDetails,snippet,statistics",
          id: id,
        },
      }),
    }),
    getVideoRelated: builder.query({
      query: (id) => ({
        headers: header,
        url: "search",
        params: {
          part: "contentDetails,snippet,statistics",
          relatedToVideoId: id,
          type: "video",
        },
      }),
    }),
    getChannel: builder.query({
      query: (id) => ({
        headers: header,
        url: "channels",
        params: { part: "snippet,statistics", id: id },
      }),
    }),
    getChannelVideos: builder.query({
      query: (id) => ({
        headers: header,
        url: "search",
        params: {
          channelId: id,
          part: "snippet,id",
          order: "date",
          maxResults: "50",
        },
      }),
    }),
    getComments: builder.query({
      query: (id) => ({
        headers: header,
        url: "commentThreads",
        params: { part: "snippet", videoId: id, maxResults: "20" },
      }),
    }),
  }),
});

export const {
  useGetVideoQuery,
  useGetChannelQuery,
  useGetChannelVideosQuery,
  useGetVideoDetailsQuery,
  useGetVideoRelatedQuery,
  useGetCommentsQuery,
} = videoApi;
