import './App.css';
import logo from './img/freecodecamp-logo.png'
import {Boton} from './components/boton.jsx'
import {Pantalla} from './components/pantalla.jsx'
import {BtnClear} from './components/btnClear.jsx'
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState('')
  const agregarInput = (val) => {
    setInput(input + val)
  }
  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    } else {
      setInput('Ingrese valores para realizar los calculos')
      setTimeout(() => {
        setInput('')
      }, 1300);
    }
  }
  return (
    <div className="App">
      <div className='logo-content'>
        <img
        src={logo}
        className='logo'
        alt = 'Logo de freeCodeCamp'
        />
      </div>
      <div className='calculadora-content'>
        <Pantalla input = {input}/>
        <div className='fila'>
          <Boton manejarClick = {agregarInput} >1</Boton>
          <Boton manejarClick = {agregarInput} >2</Boton>
          <Boton manejarClick = {agregarInput} >3</Boton>
          <Boton manejarClick = {agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput} >4</Boton>
          <Boton manejarClick = {agregarInput} >5</Boton>
          <Boton manejarClick = {agregarInput} >6</Boton>
          <Boton manejarClick = {agregarInput} >-</Boton>
          </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput} >7</Boton>
          <Boton manejarClick = {agregarInput} >8</Boton>
          <Boton manejarClick = {agregarInput} >9</Boton>
          <Boton manejarClick = {agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {calcularResultado} >=</Boton>
          <Boton manejarClick = {agregarInput} >0</Boton>
          <Boton manejarClick = {agregarInput} >.</Boton>
          <Boton manejarClick = {agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          <BtnClear limpiarPantalla = {() => setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
