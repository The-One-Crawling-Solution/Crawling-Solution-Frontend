export const API_BASE_URL = "https://api.theonecrawlingsolution.com/api";

export const getFetchOptions = (method = "GET", body = null, token = null) => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
  ...(body && { body: JSON.stringify(body) }),
});
