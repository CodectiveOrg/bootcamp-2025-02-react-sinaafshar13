import { Attractions } from "../types/attractions";
import { Filters } from "../types/filters";

const fetchAttractions = async (filters: Filters): Promise<Attractions[]> => {
  const params = new URLSearchParams();
  filters.tags.forEach((tag) => params.append("tag", tag.id.toString()));

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/attraction?${params.toString()}`
  );
  return await response.json();
};

export default fetchAttractions;
