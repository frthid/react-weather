import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

function App() {
  return (
    <div className='gloval_container'>
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </div>
  );
}
  
export default App;
