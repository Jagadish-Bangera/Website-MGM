import React from "react";
import { Routes, Route } from 'react-router-dom';

import HeaderSection from "./Components/HeaderNavigation.jsx";
import Foot from "./Components/FooterTab.jsx";
import Apply from "./Pages/Apply.jsx";

import "./index.css";

function App() {
  return (
    <>
      <HeaderSection />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-[2000px] bg-gray-100 p-6">
              <p className="text-xl text-[#003366] font-semibold">
                Scroll down to test the sticky navbar. It should stay fixed at the top!
              </p>
            </div>
          }
        />

        {/* ✅ Use your actual Apply component here */}
        <Route path="/apply" element={<Apply />} />
      </Routes>

        <Foot />
      


    </>
  );
}

export default App;