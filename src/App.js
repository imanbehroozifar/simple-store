import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AboutUs from './components/AboutUs/inedx'
import DetailsPage from "./components/DetailsPage.jsx";
import NotFound from "./components/NotFound";
function App() {
  return (
    < >
      <Navbar />
      <Routes>
        <Route path="/product/us" element={<AboutUs/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<DetailsPage/>}/>
        <Route path="/" element={<LandingPage />} />
         <Route path="/*" element={<Navigate to="/notfound" />}/>
        <Route path="/notfound"  element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
