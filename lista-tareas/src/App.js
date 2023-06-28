import './App.css';
import logo from './img/freecodecamp-logo.png'
// import {Task} from './componentes/Tareas.jsx'
import './css/style.css'
import { TaskList } from './componentes/TaskList';

function App() {
  return (
    <div className="task-list-content">
      <div className='logo-content'>
        <img 
          src={logo}
          className='logo' 
          />
      </div>
      <div className='task-list'>
        <h1>Mis Tareas</h1>
        {/* <Task text={'Aprender React'}/> */}
        <TaskList />

      </div>
    </div>
  );
}

export default App;
