import React, { useContext, useEffect } from 'react'
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';

const ListProyects = () => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { projects, getProjects } = projectsContext;

    // Obtener projectos cuando carga el componente
    useEffect(() => {
        getProjects();
    }, [])
    
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
    
    return (
        <ul className="projects-list">
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    );
}

export default ListProyects;
