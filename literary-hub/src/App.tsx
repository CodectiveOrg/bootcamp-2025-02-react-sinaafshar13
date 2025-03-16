import { ReactNode } from "react";

import MediaProvider from "./providers/MediaProvider";

import "./App.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import ThemeProvider from "./providers/ThemeProvider";
import Toaster from "./components/Toaster/Toaster";
import Create from "./components/Create/Create";


const App = (): ReactNode => {
  return (
    <ThemeProvider>
      <MediaProvider>
        <Header />
        <main>
          <Toolbar />
          <Result />
        </main>
        <Create />
        <Toaster />
      </MediaProvider>
    </ThemeProvider>
  );
};

export default App;
