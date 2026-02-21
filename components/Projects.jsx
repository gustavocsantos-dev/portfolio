import "../styles/Projects.css"
import ProjectIem from "../components/ProjectItem"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import wizardzPreview from "/preview-wizardz.png"
import simulabPreview from "/preview-simulab.png"
import htmlImg from "/html.png"
import cssImg from "/css.png"
import javascriptImg from "/javascript.png"

export default function Projects(){
    const revealRef = useRevealOnScroll();
    return(
        <div className="projects reveal" ref={revealRef} id="projects">
            <div className="projectsTitle">
                <h1>Projetos</h1>
            </div>
            <div className="projectsItems">
                <ProjectIem 
                    src={wizardzPreview}
                    title="WizardZ" description="A WizardZ Landing Page é um projeto front-end desenvolvido com foco em apresentação institucional para uma agência de marketing digital fictícia. A proposta da página é transmitir modernidade, profissionalismo e clareza na comunicação dos serviços oferecidos, como: SEO, PPC, Social Media Marketing, Criação de Conteúdo" 
                    tech1={htmlImg} 
                    tech2={cssImg} 
                    tech3={javascriptImg}
                    project="https://landing-page-wizardz.vercel.app/"
                    repo="https://github.com/gustavocsantos-dev/landing-page-wizardz"
                />
                <ProjectIem 
                    src={simulabPreview} 
                    title="SimuLab" 
                    description="O SimuLab é uma aplicação web desenvolvida com o objetivo de auxiliar estudantes na fixação de conteúdo por meio da criação e execução de simulados personalizados. O projeto permite: Criar simulados por matéria e tópico, definir quantidade de perguntas, definir número de alternativas (A-D ou A-E), executar o simulado, visualizar o resultado final, excluir simulados criados" 
                    tech1={htmlImg} 
                    tech2={cssImg} 
                    tech3={javascriptImg}
                    project="https://simulab-black.vercel.app/"
                    repo="https://github.com/gustavocsantos-dev/simulab"
                />
            </div>
        </div>
    )
}