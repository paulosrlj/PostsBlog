import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import MainScreen from "./pages/MainScreen/MainScreen";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/posts/:username" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
