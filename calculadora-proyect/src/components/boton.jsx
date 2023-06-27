import React from 'react'
import './../css/btn-style.css'

export const Boton = (props) => {
    const esOperador = (valor) => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    }
    return(
        <div 
        className={`btn-contenedor 
                    ${esOperador(props.children) 
                    ? 'operador' 
                    : ''}`.trimEnd()}
                    onClick={() => props.manejarClick(props.children)}
                    >
            {props.children}
        </div>
    )
}           