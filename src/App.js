import React, { useEffect, useCallback } from "react";
import "./utils/styles.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import "react-calendar/dist/Calendar.css";
import "./utils/Calendar.css";
function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
