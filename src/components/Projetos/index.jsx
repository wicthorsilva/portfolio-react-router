import React from "react";

import "./Projetos.css";
import barberLup from "../../assets/img/projetos/barber-lup.png"
import landingpageMKT from "../../assets/img/projetos/project-landpage.png"

function Projetos (){

    const cardsProjects = [
        {
            link: "https://wicthorsilva.github.io/project-barberlup/",
            image: "../../assets/img/projetos/barber-lup.png",
            title: "Site para barbearia"
        },
        {
            link: "https://wicthorsilva.github.io/landingpage/",
            image: "../../assets/img/projetos/project-landpage.png",
            title: "Landing page de marketing digital"
        },
        {
            link: "https://wicthorsilva.github.io/landingpage/",
            image: "../../assets/img/projetos/project-landpage.png",
            title: "Landing page de marketing digital"
        }
    ];

    return (
        <section id="projetos" className="section-projetos">

        <div className="titulos-page-conteudos">
         <h2 id="">Projetos</h2>
        </div>
    <div className="cards-container">
    
        <div className="container-servicos">

        {cardsProjects.map(
            (projeto) =>

            <div className="boxs-cards">
                <a href={cardsProjects.link} target="_blank">
                    <img src={cardsProjects.image} alt="img-card"/>
                    <p>{cardsProjects.title}</p>
                </a>
            </div>

            )}


            {/* <div className="boxs-cards">
                <a href="https://wicthorsilva.github.io/landingpage/" target="_blank"><img src={landingpageMKT} alt="img-landpage"/></a>
            </div>

            <div className="boxs-cards">
                <a href=""><img src="" alt="img-"/></a>
            </div> */}
        </div>

        {/* <div className="container-servicos">
            <div className="boxs-cards">
                <a href=""><img src="" alt="img"/></a>
            </div>
            <div className="boxs-cards">
                <a href=""><img src="" alt="img"/></a>
            </div>
            <div className="boxs-cards">
                <a href=""><img src="" alt="img"/></a>
            </div>
        </div> */}

    </div>    
</section>
    )
}

export default Projetos;