import { ReactElement } from "react";

import styles from "./AttractionSidebar.module.css";

import { Attractions } from "../../../../types/attractions.ts";

import MingcutePhoneFill from "../../../../icons/MingcutePhoneFill.tsx";
import MingcuteLocationFill from "../../../../icons/MingcuteLocationFill.tsx";
import FluentEmojiFlatStar from "../../../../icons/FluentEmojiFlatStar.tsx";

type Props = {
  attraction: Attractions;
};

function AttractionSidebar({ attraction }: Props): ReactElement {
  return (
    <aside className={styles["attraction-sidebar"]}>
      <div className={styles.info}>اطلاعات جاذبه گردشگری</div>
      <h4 className={styles.title}>
        {attraction.title}
        <div className={styles.rating}>
          {attraction.averageRating}
          <FluentEmojiFlatStar />
        </div>
      </h4>

      <div className={styles.phone}>
        <MingcutePhoneFill />
        {attraction.phone}
      </div>

      <div className={styles.address}>
        <MingcuteLocationFill />
        {attraction.address}
      </div>
    </aside>
  );
}

export default AttractionSidebar;
