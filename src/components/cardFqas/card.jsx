import style from "./card.module.css"
export default function CardFqas({question, answer}){
    return(
        <div className={`${style.card} p-4`}>
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    )
}