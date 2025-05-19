import { createContext } from "react";

import { AttractionsTag } from "../types/attractions-tag.ts";
import { Filters } from "../types/filters.ts";

type FiltersContextValue = {
  filters: Filters;
  toggleTag: (tag: AttractionsTag) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    tags: [],
  },
  toggleTag: () => {},
});