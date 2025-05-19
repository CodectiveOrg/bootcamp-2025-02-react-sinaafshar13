import { ReactElement } from "react";

import styles from "./AttractionBody.module.css";
import { Attractions } from "../../../../types/attractions.ts";

type Props = {
  attraction: Attractions;
};

function AttractionBody({ attraction }: Props): ReactElement {
  return (
    <div className={styles["attraction-body"]}>
      <div dangerouslySetInnerHTML={{ __html: attraction.body }} />
    </div>
  );
}

export default AttractionBody;