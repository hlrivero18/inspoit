import style from "./tyc.module.css"

export default function Tyc() {

    return (
        <div>
            <div className={style.contenedor_titulo}>
            <h1 className={style.titulo}>Terminos y condiciones</h1>
            </div>
            
            <div className={style.contenedor}>
                <details className={style.terminos}>
                    <summary className={style.encabezado_card}>1. Introducción</summary>
                    <p className={style.contenido_card}>Estos términos y condiciones regulan el uso de los servicios ofrecidos por InspoIT, una red innovadora dedicada a conectar organizaciones que requieren apoyo tecnológico con voluntarios del ámbito IT. Al utilizar nuestro sitio web y nuestros servicios, tanto las organizaciones como los voluntarios aceptan los términos aquí descritos.</p>
                </details>
            

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>2. Definiciones</summary>
                <p className={style.contenido_card}>"Organización" se refiere a cualquier entidad que se inscribe en InspoIT para solicitar apoyo tecnológico. "Voluntario" es cualquier persona que se une para brindar sus servicios y conocimientos sin recibir compensación económica.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>3. Uso del Servicio</summary>
                <p className={style.contenido_card}>Las organizaciones y los voluntarios deben usar el servicio de manera ética y profesional, respetando los derechos y la confidencialidad de las partes involucradas. Cualquier mal uso puede resultar en la suspensión o terminación del acceso a la plataforma.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>4. Responsabilidad de las Organizaciones</summary>
                <p className={style.contenido_card}>Las organizaciones son responsables de proporcionar información clara y verídica sobre sus necesidades tecnológicas. También deben brindar el soporte necesario para que los voluntarios puedan llevar a cabo su labor de manera efectiva.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>5. Responsabilidad de los Voluntarios</summary>
                <p className={style.contenido_card}>Los voluntarios se comprometen a aplicar sus habilidades de manera profesional y ética, respetando los plazos y las expectativas acordadas con las organizaciones. Cualquier incumplimiento puede afectar su participación en futuros proyectos.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>6. Propiedad Intelectual</summary>
                <p className={style.contenido_card}>Todo el contenido creado por los voluntarios para las organizaciones, en el marco de un proyecto, será propiedad de la organización, a menos que se acuerde lo contrario por escrito entre ambas partes.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>7. Confidencialidad</summary>
                <p className={style.contenido_card}>Tanto las organizaciones como los voluntarios deben mantener la confidencialidad de la información sensible a la que tengan acceso durante el curso de un proyecto. Esta obligación perdura incluso después de la finalización del proyecto.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>8. Modificaciones a los Términos</summary>
                <p className={style.contenido_card}>InspoIT se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigencia una vez que sean publicados en nuestro sitio web. Es responsabilidad de los usuarios revisar estos términos periódicamente.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>9. Limitación de Responsabilidad</summary>
                <p className={style.contenido_card}>InspoIT no será responsable por ningún daño directo, indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar los servicios proporcionados a través de la plataforma, incluidas las pérdidas de datos o beneficios.</p>
            </details>

            <details className={style.terminos}>
                <summary className={style.encabezado_card}>10. Ley Aplicable</summary>
                <p className={style.contenido_card}>Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que se encuentra registrada la organización InspoIT. Cualquier disputa relacionada con estos términos será resuelta en los tribunales competentes de dicha jurisdicción.</p>
            </details>
            </div>
        </div>
    )
}