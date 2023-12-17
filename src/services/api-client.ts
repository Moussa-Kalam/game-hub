import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Create axios instance
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c397bc00ce93427f99431a57aa2a1549",
  },
});
