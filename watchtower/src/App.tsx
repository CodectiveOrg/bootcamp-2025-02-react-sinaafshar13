import { ReactNode } from "react";

import MediaProvider from "./providers/MediaProvider";

import "./App.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import Create from "./components/Create/Create";
import ThemeProvider from "./providers/ThemeProvider";

const App = (): ReactNode => {
  return (
    <ThemeProvider>
      <MediaProvider>
        <Header />
        <main>
          <Toolbar />
          <Result />
          <Create />
        </main>
      </MediaProvider>
    </ThemeProvider>
  );
};

export default App;
