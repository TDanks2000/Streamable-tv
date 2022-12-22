import { MOVIES } from "@consumet/extensions";
import { utils } from "../utils";
import Constants from "expo-constants";
import axios from "axios";

const { tmdb_api_key } = Constants?.expoConfig?.extra;
const flixhq = new MOVIES.FlixHQ();

export const findMatchFromTitle = async (query, type) => {
  // Query is required
  if (!query) throw new Error("Query is required");
  // Type is required
  if (!type) throw new Error("Type is required");

  //find match from title using tmdb api
  type = type?.toLowerCase().includes("tv") ? "tv" : "movie";

  // Store the raw query for later use
  const rawQuery = query;
  // clean the query
  query = utils.stripNonText(query);

  //create url
  const url = `https://api.themoviedb.org/3/search/${type}?api_key=${tmdb_api_key}&query=${query}&language=en-US&page=1&include_adult=false`;

  // get the data from tmdb
  const { data } = await axios.get(url);

  // get the results
  const { results } = data;

  const matches = [];

  // compare each result with the query
  await results.map((result) => {
    const { title, name } = result;
    const match = utils.compareTwoStrings(title || name, rawQuery);
    matches.push({ ...result, match });
  });

  // sort each item by match then get the highest match
  const bestMatch = matches.sort((a, b) => b.match - a.match)[0];

  return bestMatch || undefined;
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
  if (!id) throw new Error("Id is required");
  if (!type) throw new Error("Type is required");
  //get info from tmdb using axios
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${tmdb_api_key}&language=en-US&append_to_response=videos,images,credits,media_type,external_ids,recommendations,keywords,release_dates,translations,watch/providers,similar`;
  console.log(url);
  const { data } = await axios.get(url);
  return data;
};
