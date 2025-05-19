import { PropsWithChildren, ReactElement, useContext } from "react";

import { AttractionsContext } from "../context/attractions-context.ts";
import { FiltersContext } from "../context/filters-context.ts";

import fetchAttractions from "../api/fetch-attractions.ts";
import { useQuery } from "@tanstack/react-query";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data, isLoading } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
    initialData: [],
  });

  if (isLoading) {
    return <>داره بارگذاری میشه ممنون از صبر . شکیبایی شما</>;
  }
  return (
    <AttractionsContext.Provider value={{ filteredAttractions: data }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
