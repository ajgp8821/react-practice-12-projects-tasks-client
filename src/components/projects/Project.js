import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { getActualProject } = projectsContext;

    // Obtener el state de las tareas
    const tasksContext = useContext(TaskContext);
    const { getTasks } = tasksContext;

    // Función para agregar el proyecto actual
    const selectProject = id => {
        getActualProject(id); // Fijar un proyecto actual
        getTasks(id); // Filtrar las tareas

    }
    
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project.id) }
            >{project.name}</button>
        </li>
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
}

export default Project;
