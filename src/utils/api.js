import { MOVIES } from "@consumet/extensions";
import { utils } from "../utils";
import Constants from "expo-constants";
import axios from "axios";

const { tmdb_api_key } = Constants?.expoConfig?.extra;
const flixhq = new MOVIES.FlixHQ();

export const findMatchFromTitle = async (query, type) => {
  //find match from title using tmdb api
  type = type?.toLowerCase().includes("tv") ? "tv" : "movie";
  const rawQuery = query;
  query = utils.stripNonText(query);

  const url = `https://api.themoviedb.org/3/search/${type}?api_key=${tmdb_api_key}&query=${query}&language=en-US&page=1&include_adult=false`;

  const { data } = await axios.get(url);
  const { results } = data;

  const matches = [];
  await results.map((result) => {
    const { title, name, id } = result;
    const match = utils.compareTwoStrings(title || name, rawQuery);
    matches.push({ ...result, match });
  });

  const bestMatch = matches.sort((a, b) => b.match - a.match)[0];

  return bestMatch;
};

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

export const getInfo = async (id, type) => {
  //get info from tmdb using axios
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${tmdb_api_key}&language=en-US`;
  const { data } = await axios.get(url);
  return data;
};
