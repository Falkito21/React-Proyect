import React from "react";
import './../css/boton.css'

export const Boton = ({title, btnType, manejarClick}) => {
    return(
        <button 
            className={btnType === "click" ? "btn-click" : "btn-reiniciar"}
            onClick={manejarClick}>
            {title}
        </button>
    )
} 