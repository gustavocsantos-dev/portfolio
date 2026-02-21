import { useState } from "react"
import "../styles/ProjectItem.css"

export default function ProjectIem(props){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <div className="projectDiv">
                <section>
                    <img 
                        className="projectThumb" 
                        src={props.src} 
                        alt="project-thumb"
                        onClick={() => setIsOpen(true)}
                        style={{ cursor: "pointer" }}
                    />
                </section>

                <section className="projectText">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </section>

                <section className="projectTechs">
                    <img src={props.tech1} alt="tech-icon" className="tech"/>
                    <img src={props.tech2} alt="tech-icon" className="tech"/>
                    <img src={props.tech3} alt="tech-icon" className="tech"/>
                </section>

                <section className="projectButtons">
                    <a className="btn" target="blank" href={props.project}>Acessar Projeto</a>
                    <a className="btn" target="blank" href={props.repo}>Acessar Repositório</a>
                </section>
            </div>

            {isOpen && (
                <div className="modalOverlay" onClick={() => setIsOpen(false)}>
                    <div 
                        className="modalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="closeBtn"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                        <img 
                            src={props.src} 
                            alt="project-full"
                            className="modalImage"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
