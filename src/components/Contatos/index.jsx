import React from "react";

import "./Scripts";

import contatoGithub from "../../assets/img/icons/icons8-github-50(2).png"
import contatoLinkedin from "../../assets/img/icons/icons8-linkedin-50.png"
import contatoBehance from "../../assets/img/icons/icons8-behance-50.png"

function Contatos () {

    const redeContact = [
        {
            link:"https://github.com/wicthorsilva",
            image:"../../assets/img/icons/icons8-github-50(2).png",
            title:"@wicthorsilva"
        },
        {
            link:"https://www.linkedin.com/in/wicthor-silva-b10809251/",
            image:"../../assets/img/icons/icons8-linkedin-50.png",
            title:"@wicthor"
        },
        {
            link:"https://www.behance.net/wicthordev",
            image:"../../assets/img/icons/icons8-behance-50.png",
            title:"/wicthordev"
        }
    ];

    return (
        <section id="contato" className="conteudo-contato">
        <div className="titulos-page-conteudos">
         <h2 id="">Contatos</h2>
        </div>

        <div className="formulario-contato">

            <form onsubmit="event.preventDefault()">

                <fieldset>
                    <label for="input-nome">Nome</label>
                    <input type="text" name="input-nome" id="input-nome" required minlength="2"/>
                </fieldset>

                <fieldset>
                    <label for="input-email">E-mail</label>
                    <input type="email" name="input-email" id="input-email" required/>
                </fieldset>

                <fieldset>
                    <label for="input-tel">Telefone</label>
                    <input type="tel" name="input-tel" id="input-tel" placeholder="(99) 99999-9999" required pattern="^\(\d{2}\) \d{5}-\d{4}$" maxlength="15"/>
                </fieldset>

                <fieldset>
                    <label for="input-msg">Mensagem</label>
                    <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>
                </fieldset>

                <center>
                    <input type="submit" value="ENVIAR" className="button" id="button-enviar" onclick="enviarFormulario()"/>
                </center>

            </form>
        </div>


        <div className="container-contato">

            <div className="div-contatos">

            {redeContact.map(
            (cardRede) =>

            <div className="redes-contatos">
                <a href={redeContact.link} target="_blank"><img src={redeContact.image} alt="redes-img"/></a>
                <p>{redeContact.title}</p>
            </div>

            )}


                
                {/* <div className="redes-contatos">
                    <a href="https://www.linkedin.com/in/wicthor-silva-b10809251/" target="_blank"><img src={contatoLinkedin} alt="linkedin"/></a>
                    <p>@wicthor</p>
                </div>
                <div className="redes-contatos">
                    <a href="https://www.behance.net/wicthordev" target="_blank"><img src={contatoBehance} alt="Behance"/></a>
                    <p>/wicthordev</p>
                </div> */}
            </div>
        </div>

    </section>
    )
}

export default Contatos;