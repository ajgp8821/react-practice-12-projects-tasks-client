import React, { Fragment, useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import Task from './Task';

const ListTasks = () => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { project, deleteProject } = projectsContext;

    // Obtener el state de las tareas
    const tasksContext = useContext(TaskContext);
    const { tasksProject } = tasksContext;

    if ( !project ) return <h2>Selecciona un Proyecto</h2>;
    // Array destructuring para extraer el proyecto actual
    const [ actualProject ] = project;

    // const tasksProject = [];

    // Elimina un proyecto
    const onClickDelete = () => {
        deleteProject(actualProject.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {actualProject.name}</h2>
            <ul className="list-tasks">
                {tasksProject.length === 0
                    ? (<li className="task">No hay Tareas</li>)
                    : tasksProject.map(task =>(
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-delete"
                onClick={onClickDelete}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListTasks;
