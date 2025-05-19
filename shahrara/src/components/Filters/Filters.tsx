import { ReactElement } from "react";

import styles from "./Filters.module.css";

import TagFilter from "./components/TagFilter/TagFilter";

const Filters = (): ReactElement => {
  return <div className={styles.filters}>
    <TagFilter />
  </div>;
};

export default Filters;
