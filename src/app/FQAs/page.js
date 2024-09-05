import CardFqas from '@/components/cardFqas/card'
import style from './Fqas.module.css'
import fqas from '@/utils/FQAs'

export default function FQAs(){
    return(
        <div className={`${style.container}`}>
            <h1>Preguntas y respuestas</h1>
            {fqas.general.map((question, index)=>{
                return(
                    <CardFqas key={index} question={question.pregunta} answer={question.respuesta}/>
                )
            })}

            <h2 className='mt-12'>Para organizaciones: </h2>
            {fqas.ong.map((question, index)=>{
                return(
                    <CardFqas key={index} question={question.pregunta} answer={question.respuesta}/>
                )
            })}

            <h2 className='mt-12'>Para usuarios: </h2>
            {fqas.volunteering.map((question, index)=>{
                return(
                    <CardFqas key={index} question={question.pregunta} answer={question.respuesta}/>
                )
            })}
            
            
        </div>
    )
}