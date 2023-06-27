
import { useState } from 'react';
import { evaluate } from 'mathjs'

 //useState
 export const [input, setInput] = useState('')
 //funcion que va concatenando los btn que voy seleccionando
 export const agregarInput = (val) => {
   setInput(input + val)
 }

 export const calcularResultado = () => {
   if(input){
     setInput(evaluate(input))
   } else {
     setInput('Ingrese valores para realizar los calculos')
     setTimeout(() => {
       setInput('')
     }, 1300);
   }
 }

 export const limpiarInput = () => {
    setInput('')
 }