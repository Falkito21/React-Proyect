import React from "react";  
import './../css/formTask.css'

export const FormTask = ({}) => {
    return(
        <form className="form-task">
            <input 
                className="input-task" 
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
            />
            <button className="task-boton">Add Task</button>
        </form>
    )
}