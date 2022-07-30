import React from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
function App() {
  return (
    < >
     <Navbar/>
      <Banner />
      <Cards />
      <Search />
      <Logos />
      <Footer/>
    </>
  );
}

export default App;
