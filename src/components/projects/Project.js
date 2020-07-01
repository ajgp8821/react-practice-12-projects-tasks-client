import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import ProjectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { getActualProject } = projectsContext;
    
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => getActualProject(project.id) }
            >{project.name}</button>
        </li>
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
}

export default Project;
