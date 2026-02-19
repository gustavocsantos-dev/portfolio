import "../styles/Skills.css"
import Box from "../components/Box"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"

export default function Skills(){
    const revealRef = useRevealOnScroll();
    
    return(
        <div className="skills reveal" ref={revealRef} id="skills">
            <div className="skillTitle">
                <h1>Habilidades</h1>
            </div>
            <div className="skillBoxes">
                <Box name="HTML5" src="../assets/html.png"/>
                <Box name="CSS3" src="../assets/css.png"/>
                <Box name="JavaScript" src="../assets/javascript.png"/>
                <Box name="TypeScript" src="../assets/typescript.png"/>
                <Box name="React.js" src="../assets/react.png"/>
                <Box name="Next.js" src="../assets/nextjs.png"/>
                <Box name="Node.js" src="../assets/node.png"/>
                <Box name="SASS" src="../assets/sass.png"/>
            </div>
        </div>
    )
}