import './App.css';

import { Testimonio } from './componentes/testimonio'; 
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre los iphone</h1>
      </div>
      <Testimonio />
    </div>
  );
}

export default App;
