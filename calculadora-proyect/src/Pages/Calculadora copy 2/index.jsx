import { Boton } from "../../components/boton"
import { Pantalla } from "../../components/pantalla"


import { useState } from 'react';
import { evaluate } from 'mathjs'
import { BtnClear } from "../../components/btnClear";
import logo from '../../img/freecodecamp-logo.png';
//useState





const Calculadora = () => {

    const [input, setInput] = useState('')
    //funcion que va concatenando los btn que voy seleccionando
    const agregarInput = (val) => {
        setInput(input + val)
    }

    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input))
        } else {
            setInput('Ingrese valores para realizar los calculos')
            setTimeout(() => {
                setInput('')
            }, 1300);
        }
    }

    const limpiarInput = () => {
        setInput('')
    }






    return (
        <>
            <div className="App">
                <div className='logo-content'>
                    <img
                        src={logo}
                        className='logo'
                        alt='Logo de freeCodeCamp'
                    />
                </div>
                <div className='calculadora-content'>
                    {/* componente Pantalla */}
                    <Pantalla input={input} />
                    <div className='fila'>
                        {/* componentes Boton */}
                        <Boton manejarClick={agregarInput} >1</Boton>
                        <Boton manejarClick={agregarInput} >2</Boton>
                        <Boton manejarClick={agregarInput} >3</Boton>
                        <Boton manejarClick={agregarInput} >+</Boton>
                    </div>
                    {/* componentes Boton */}
                    <div className='fila'>
                        <Boton manejarClick={agregarInput} >4</Boton>
                        <Boton manejarClick={agregarInput} >5</Boton>
                        <Boton manejarClick={agregarInput} >6</Boton>
                        <Boton manejarClick={agregarInput} >-</Boton>
                    </div>
                    <div className='fila'>
                        {/* componentes Boton */}
                        <Boton manejarClick={agregarInput} >7</Boton>
                        <Boton manejarClick={agregarInput} >8</Boton>
                        <Boton manejarClick={agregarInput} >9</Boton>
                        <Boton manejarClick={agregarInput} >*</Boton>
                    </div>
                    <div className='fila'>
                        {/* componentes Boton */}
                        <Boton manejarClick={calcularResultado} >=</Boton>
                        <Boton manejarClick={agregarInput} >0</Boton>
                        <Boton manejarClick={agregarInput} >.</Boton>
                        <Boton manejarClick={agregarInput} >/</Boton>
                    </div>
                    <div className='fila'>
                        {/* componente Boton Clear */}
                        <BtnClear limpiarPantalla={limpiarInput}>Clear</BtnClear>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculadora