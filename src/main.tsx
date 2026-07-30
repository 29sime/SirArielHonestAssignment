import "@/assets/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/assets/pages/home";
import AboutPage from "@/assets/pages/about";
  

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about"element={<AboutPage/>} />
      
    </Routes>
  </BrowserRouter>
);