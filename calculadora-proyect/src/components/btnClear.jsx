import React from "react";
import './../css/btnClear.css'

export const BtnClear = (props) => (
    <div className="btn-clear"
    onClick={props.limpiarPantalla}
    >
        {props.children}
    </div>
)