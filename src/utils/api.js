import { MOVIES } from "@consumet/extensions";

const flixhq = new MOVIES.FlixHQ();

export const searchMovies = async (query) => {
  return await flixhq.search(query);
};

export const getMovieInfo = async (id) => {
  return await flixhq.fetchMediaInfo(id);
};

export const getSources = async (mediaId, episodeId) => {
  return await flixhq.fetchEpisodeSources(mediaId, episodeId);
};

export const getServers = async (mediaId, episodeId) => {
  return await flixhq.fetchEpisodeServers(mediaId, episodeId);
};

export const getRecent = async (type) => {
  if (!type) throw new Error("Type is required");
  return type.toLowerCase().toString() === "tv"
    ? await flixhq.fetchRecentTvShows()
    : await flixhq.fetchRecentMovies();
};

export const getTrending = async (type) => {
  if (!type) throw new Error("Type is required");
  return type.toLowerCase().toString() === "tv"
    ? await flixhq.fetchTrendingTvShows()
    : await flixhq.fetchTrendingMovies();
};
