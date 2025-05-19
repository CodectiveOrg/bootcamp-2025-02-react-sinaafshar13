import { Attractions } from "../types/attractions";

const fetchAttraction = async (id: string): Promise<Attractions> => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`
    );
   return await response.json();
}
export default fetchAttraction;
