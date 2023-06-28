import './App.css';
// import logo from './img/freecodecamp-logo.png'
// import { Boton } from './components/boton.jsx'
// import { Pantalla } from './components/pantalla.jsx'
// import { BtnClear } from './components/btnClear.jsx'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import { Calculadora, Calculadora2, Calculadora3, } from './Pages';
import { useState } from 'react';


export const App = () => {
  const [login, setLogin] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {login ?
            <>
              <Route index path="/*" element={
              <>
                <button onClick={() => setLogin(!login)}>login</button>
              </>} />

            </>
            :
            <>
              <Route index path="/*" element={<>
                <Calculadora3 />
              </>} />
            </>}
          {/* <Route path='/otro' element={}></Route> */}
          {/* <Route path='/otre' element={<Calculadora />}></Route> */}

        </Routes>
        {/* <Calculadora3 /> */}
        {/* <Calculadora></Calculadora> */}
      </BrowserRouter>
    </>
  );
}
