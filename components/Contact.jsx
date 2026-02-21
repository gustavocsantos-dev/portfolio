import "../styles/Contact.css"
import ContactIcon from "./ContactIcon"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import emailImg from "/mail.png"
import phoneImg from "/phone.png"
import linkedinImg from "/linkedin.png"
import githubImg from "/github.png"

export default function Contact(){
    
    const revealRef = useRevealOnScroll();
    
    return(
        <div className="contacts reveal" ref={revealRef} id="contacts">
            <div className="contactTitle">
                <h1>Contatos</h1>
            </div>
            <div className="contactIcons">
                <ContactIcon href="mailto:guscdossantos@gmail.com" media="E-mail" info="guscdossantos@gmail.com" src={emailImg}/>
                <ContactIcon href="https://api.whatsapp.com/send?phone=5521992948952" media="Telefone" info="(21) 99294-8952" src={phoneImg}/>
                <ContactIcon href="https://www.linkedin.com/in/gustavo-carvalho-desenvolvedor/" media="LinkedIn" info="gustavo-carvalho" src={linkedinImg}/>
                <ContactIcon href="https://github.com/gustavocsantos-dev" media="Github" info="gustavocsantos-dev" src={githubImg}/>
            </div>
        </div>
    )
}