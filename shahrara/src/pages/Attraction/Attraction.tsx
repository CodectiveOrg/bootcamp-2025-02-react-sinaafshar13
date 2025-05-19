import { ReactNode } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import fetchAttraction from "../../api/fetch-attraction";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar";
import Carousel from "./components/Carousel/Carousel";
import AttractionBody from "./components/AttractionBody/AttractionBody";

import styles from "./Attraction.module.css";

const Attraction = (): ReactNode => {
  let { id } = useParams();

  const { data: attraction, isLoading } = useQuery({
    queryKey: ["attraction", id],
    queryFn: () => fetchAttraction(id!),
  });

  if (isLoading || !attraction) {
    return <>در حال بارگذاری...</>;
  }

  return (
    <div className={styles.Attraction}>
      <AttractionSidebar attraction={attraction} />
      <Carousel attraction={attraction} />
      <AttractionBody attraction={attraction} />
    </div>
  );
};

export default Attraction;
