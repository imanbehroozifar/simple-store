import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AboutUs from './components/AboutUs/inedx'
function App() {
  return (
    < >
      <Navbar />
      <Switch>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/products" component={Products}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
