import React from "react";

import "./Project.css";

import ItemProject from "../ItemProject";
import Project from "./Project.json";





function Projects (){

    return (
        <section id="project" className="section-project">

            <div className="titulos-page-conteudos">
                <h2 id="">Projetos</h2>
            </div>
                <div className="cards-container">
            
                    <div className="container-servicos">

                        {Project.map(
                            (item, index) => 
                                <ItemProject
                                key={index}
                                link={item.link}
                                image={item.image + (index +1)}
                                title={item.title + (index +1)}
                                >
                                </ItemProject>
                            )}


                    </div>
                </div>    
        </section>
    );
}

export default Projects;