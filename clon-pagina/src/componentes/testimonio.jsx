import React from 'react'
import {testimonio} from './../css/testimonio.css'
export const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src = {require(`./../img/testimonio-${props.img}.png`)}
      alt={`Foto de ${props.src}`} 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  )
}