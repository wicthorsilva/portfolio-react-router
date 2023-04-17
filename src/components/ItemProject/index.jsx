import React from "react";

import "./ItemProject.css";


function ItemProject (props) {
    return (
        <div className="boxs-cards">
                <a href={props.link} target="_blank">
                    <img src={props.image} alt="img-card"/>
                    <p>{props.title}</p>
                </a>
            </div>
    );
}

export default ItemProject;