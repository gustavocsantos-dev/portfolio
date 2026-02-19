import "../styles/ContactIcon.css"

export default function ContactIcon(props){
    return(
        <div className="contactIcon">
            <section className="contactImg">
                <a href={props.href} target="blank">
                    <img className="imgIcon" src={props.src} alt="contactIcon" />
                </a>
            </section>
            <h3>{props.media}</h3>
            <span>{props.info}</span>
        </div>
    )
}