import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    // Obtener el state de las tareas
    const tasksContext = useContext(TaskContext);
    const { getTasks, deleteTaskById, changeStateTask, editActualTask } = tasksContext;

    // Array destructuring para extraer el proyecto actual
    const [ actualProject ] = project;

    // Eliminar tarea
    const deleteTask = idTask => {
        deleteTaskById(idTask);
        getTasks(actualProject.id)
    }

    // Cambiar el estado de la tarea
    const changeState = task => {
        if (task.state) {
            task.state = false;
        }
        else {
            task.state = true;
        }
        changeStateTask(task);
    }

    // Agrega una tarea
    const selectTask = task => {
        editActualTask(task);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>

            <div className="state">
                {task.state
                ?
                    (
                        <button
                            type="button"
                            className="complete"
                            onClick={() => changeState(task)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incomplete"
                            onClick={() => changeState(task)}
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => selectTask(task)}
                    >Editar</button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => deleteTask(task.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Task;
