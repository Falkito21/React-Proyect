import './App.css';
import { Testimonio } from './componentes/testimonio'; 
import { testimonios } from './data/lista-testimonio';
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
      </div>
      {testimonios.map(i => {
        return(
        <Testimonio 
        src = {i.src}
        nombre={i.nombre}
        pais={i.pais}
        img={i.img}
        cargo={i.cargo}
        empresa={i.empresa}
        testimonio={i.testimonio}
        />
        )
      })}
    </div>
  );
}

export default App;

