import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import ZeteBox from "./pages/Zete";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquire" element={<Swap />} />
        <Route path="/zete" element={<ZeteBox />} />
      </Routes>
    </div>
  );
};

export default App;
