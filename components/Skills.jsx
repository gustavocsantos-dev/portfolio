import "../styles/Skills.css"
import Box from "../components/Box"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import htmlImg from "/html.png"
import cssImg from "/css.png"
import javascriptImg from "/javascript.png"
import typescriptImg from "/typescript.png"
import reactImg from "/react.png"
import nextjsImg from "/nextjs.png"
import nodeImg from "/node.png"
import sassImg from "/sass.png"

export default function Skills(){
    const revealRef = useRevealOnScroll();
    
    return(
        <div className="skills reveal" ref={revealRef} id="skills">
            <div className="skillTitle">
                <h1>Habilidades</h1>
            </div>
            <div className="skillBoxes">
                <Box name="HTML5" src={htmlImg}/>
                <Box name="CSS3" src={cssImg}/>
                <Box name="JavaScript" src={javascriptImg}/>
                <Box name="TypeScript" src={typescriptImg}/>
                <Box name="React.js" src={reactImg}/>
                <Box name="Next.js" src={nextjsImg}/>
                <Box name="Node.js" src={nodeImg}/>
                <Box name="SASS" src={sassImg}/>
            </div>
        </div>
    )
}