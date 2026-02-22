import "../styles/Banner.css"
import fotoPerfil from "/foto-do-perfil.png"


export default function Banner(){
    return(
        <div className="banner" id="home">
            <div className="intro">
                <div className="title">
                    <h1>Olá eu sou </h1><span>Gustavo Carvalho</span>
                    <p className="role">Desenvolvedor Front -End</p>
                     <p className="description">
                        Formado em Análise e Desenvolvimento de Sistemas, com foco em React e JavaScript. Busco minha primeira oportunidade na área de TI.
                    </p>
                    <div className="actions">
                        <a href="/cv/cv-gustavo-carvalho.pdf" target="_blank" rel="noopener" download={"cv-gustavocarvalho.pdf"}>Download CV</a>
                        <a href="#contacts">Entrar em contato</a>
                    </div>
                </div>
            </div>
            <div className="profile">
                <a href="">
                    <img src={fotoPerfil} alt="profilePic" />
                </a>
            </div>
        </div>
    )
}