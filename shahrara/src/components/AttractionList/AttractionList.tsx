import styles from "./AttractionList.module.css";

import { ReactNode, useContext } from "react";

import AttractionListItem from "../AttractionListItem/AttractionListItem";
import { AttractionsContext } from "../../context/attractions-context";

const AttractionList = (): ReactNode => {
  const { filteredAttractions } = useContext(AttractionsContext);

  return (
    <ul className={styles["attraction-list"]}>
      {filteredAttractions.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
};

export default AttractionList;
