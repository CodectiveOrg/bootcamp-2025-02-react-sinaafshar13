import { createContext } from "react";

import { Attractions } from "../types/attractions.ts";

type AttractionsContextValue = {
  filteredAttractions: Attractions[];
};

export const AttractionsContext = createContext<AttractionsContextValue>({
  filteredAttractions: [],
});