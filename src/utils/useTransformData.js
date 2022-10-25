export const useTransformChannel = (data) => {
  return {
    id: data.items[0].id,
    title: data.items[0].snippet.title,
    description: data.items[0].snippet.description,
    customUrl: data.items[0].snippet.customUrl,
    subscribers: data.items[0].statistics.subscriberCount,
    avatar: data.items[0].snippet.thumbnails.default.url,
    trailer: data.items[0].brandingSettings.channel.unsubscribedTrailer,
    videoCount: data.items[0].statistics.videoCount,
    banner: data.items[0].brandingSettings.image.bannerExternalUrl,
  };
};

export const useTransformVideo = (video) => {
  return {
    id: video.id.videoId,
    title: video.snippet.title,
    cardImage: video.snippet?.thumbnails?.high?.url,
    channelId: video.snippet.channelId,
    channelTitle: video.snippet?.channelTitle,
  };
};

export const useTransformVideoDetails = (video) => {
  return {
    id: video.items[0].id,
    title: video.items[0].snippet.title,
    description: video.items[0].snippet.description,
    channelId: video.items[0].snippet.channelId,
    channelTitle: video.items[0].snippet.channelTitle,
    viewCount: video.items[0].statistics.viewCount,
    likeCount: video.items[0].statistics.likeCount,
    comments: video.items[0].statistics.commentCount,
  };
};

export const useTransformComment = (comment) => {
  return {
    id: comment.id,
    authorChannelUrl: comment.snippet.topLevelComment.snippet.authorChannelUrl,
    authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
    profileImg: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
    text: comment.snippet.topLevelComment.snippet.textOriginal,
    publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
  };
};
