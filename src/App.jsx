import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contatos from "./components/Contatos";

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>


<BrowserRouter>
<nav className="nav-bar">
              <ul className="list-nav-bar">
                  <li className="li-nav-bar"><Link to="/">Sobre</Link></li>
                  <li className="li-nav-bar"><Link to="/projetos">Projetos</Link></li>
                  <li className="li-nav-bar"><Link to="/contatos">Contatos</Link></li>
              </ul>
          </nav>
          <Header></Header>
      <Routes>
          <Route index element={<Sobre />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>

    <Footer></Footer>
    </>
  )
}

export default App;
