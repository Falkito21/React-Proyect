import React from "react";
import './../css/contador.css'

export const Contador = ({numClick}) =>{
    console.log('numClick: ', numClick)
    return (
        <div className="contador">
            {numClick}
        </div>
    )
} 