import React from "react";

import "./App.css";

import NavbarMenu from "./components/NavbarMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";


import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";


function App() {
  return (
    <>


<BrowserRouter>
          <NavbarMenu></NavbarMenu>
          <Header></Header>
      <Routes>
          <Route index element={<About />} />
          <Route path="project" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <Footer></Footer>
    </>
  )
}

export default App;
