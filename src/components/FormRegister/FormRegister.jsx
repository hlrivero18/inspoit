'use client'
export function FormRegisterOng(){
    return(
        <div>
            <div>
                <form action="">
                    <div>
                        <label>Nombre de la organizacion</label>
                        <input type="text"  placeholder="escribe el nombre de tu organizacion"/>

                        <label>Fecha de creacion</label>
                        <input type="date"/>

                        <label>Persona responsable</label>
                        <input type="text" />

                        <label>Descripcion</label>
                        <input type="text" placeholder="pequeña descripcion..."/>  
                        
                        <label>Email</label>
                        <input type="text" />

                        <label>Contraseña</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}