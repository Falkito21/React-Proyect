import React from "react";
import './../css/task.css'

import { AiOutlineCloseCircle } from 'react-icons/ai'

export const Task = ({ id, text, finished, completeTask, deleteTask  }) => {
    return (
        <div className={finished
                        ? 'content-task finished'
                        : 'content-task'}>
            <div className="text-task">
                {text}
            </div>
            <div className="icons-content-task">
                <AiOutlineCloseCircle className='icon-task' />
            </div>
        </div>
    )
}