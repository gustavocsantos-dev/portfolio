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
                <Box name="HTML5" src="./Assets/html.png"/>
                <Box name="CSS3" src="./Assets/css.png"/>
                <Box name="JavaScript" src="./Assets/javascript.png"/>
                <Box name="TypeScript" src="./Assets/typescript.png"/>
                <Box name="React.js" src="./Assets/react.png"/>
                <Box name="Next.js" src="./Assets/nextjs.png"/>
                <Box name="Node.js" src="./Assets/node.png"/>
                <Box name="SASS" src="./Assets/sass.png"/>
            </div>
        </div>
    )
}