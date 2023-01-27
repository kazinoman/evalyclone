import axios from "axios";

const BASEURL: string = "https://dummyjson.com";

export const axiosBase = axios.create({
  baseURL: BASEURL,
  headers: { "X-Custom-Header": "Custom headers" },
});

axiosBase.defaults.headers.common = { Auth: "Example Auth headers" };

// Interceptors
