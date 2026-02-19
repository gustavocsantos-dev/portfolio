import "../styles/Box.css"

export default function Box(props){
    return(
        <div className="box">
            <p>{props.name}</p>
            <img className="img" src={props.src} alt="skill"></img>
        </div>
    )
}