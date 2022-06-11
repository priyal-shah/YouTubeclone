import axios from "axios";
const KEY = "AIzaSyDUqCm4YhU2cn_CeTpVWYYpep4pdceepXA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/playlists",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});