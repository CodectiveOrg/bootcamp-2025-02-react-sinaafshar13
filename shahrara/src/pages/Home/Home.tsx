import { ReactElement } from "react";

import AttractionList from "../../components/AttractionList/AttractionList";
import Filters from "../../components/Filters/Filters";

import styles from "./Home.module.css";
import FiltersProvider from "../../providers/FiltersProvider";
import AttractionsProvider from "../../providers/AttractionsProvider";

const Home = (): ReactElement => {
  return (
    <FiltersProvider>
      <AttractionsProvider>
        <div className={styles.home}>
          <Filters />
          <AttractionList />
        </div>
      </AttractionsProvider>
    </FiltersProvider>
  );
};

export default Home;
