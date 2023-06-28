import React, {useState} from "react";
import { FormTask } from "./TareaFormulario";
import './../css/taskList.css'
import { Task } from "./Tareas";

export const TaskList = ({text = ''}) => {
    const [task, setTask] = useState([])
    return(
        <>
            <FormTask />
            <div className="content-list-task">
                {
                    task.map((task) => 
                        <Task 
                        text={task.text}
                        finished={task.finished}
                        />
                    )
                }
            </div>
        </>
    )
}