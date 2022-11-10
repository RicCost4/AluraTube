import React from "react";//importação da biblioteca do react para usar a mudança de estado da pagina na variavel 'React.useContext(ColorModeContex)'
import {ColorModeContex} from "../src/components/Menu/components/ColorMode";

export default function Video(){
    const contexto = React.useContext(ColorModeContex)
    return(
        <div>
            <h1>Pagina do Video!!</h1>
            <p>Contexto da pagina <strong>{contexto.mode}</strong></p>
            <button onClick={()=> contexto.toogleMode()}>
                Troca o modo!!
            </button>          
        </div>
    )
}