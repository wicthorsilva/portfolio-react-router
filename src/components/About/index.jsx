import React from "react";

import "./About.css";
import data from "./About.json";

function About() {
    return (
        <section id="sobre" className="conteudo-curriculo">
            <div className="titulos-page-conteudos">
            <h2 id="sobre-mim">Sobre mim</h2>
            </div>

                <div className="container-curriculo">
                    <div className="conteudo-sobremim">
                        <p className="text-conteudo-curriculo">{data.sobre}</p>
                    </div>
                </div>
        </section>
    )
}

export default About;