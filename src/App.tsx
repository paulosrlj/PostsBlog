import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import MainScreen from "./pages/MainScreen/MainScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/posts/:username" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
