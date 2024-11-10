export const API_BASE_URL = "https://api.theonecrawlingsolution.com/api";

export const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getFetchOptions = (method = "GET", body = null) => ({
  method,
  headers: apiHeaders,
  ...(body && { body: JSON.stringify(body) }),
});
