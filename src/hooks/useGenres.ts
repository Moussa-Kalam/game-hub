import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// Hide the endpoint details in the hook
const useGenres = () => useData<Genre>("/genre");

export default useGenres;
