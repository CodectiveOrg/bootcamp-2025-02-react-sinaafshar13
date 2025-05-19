import { Route, Routes } from "react-router";
import { ReactNode } from "react";

import "./App.css";

import RootLayout from "./layouts/RootLayout/RootLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Attraction from "./pages/Attraction/Attraction";

import QueryProvider from "./providers/QueryPrivider";

const App = (): ReactNode => {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="attraction/:id" element={<Attraction />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
};

export default App;
