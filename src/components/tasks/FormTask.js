import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext';

const FormTask = () => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    if ( !project ) return null;
    // Array destructuring para extraer el proyecto actual
    const [ actualProject ] = project;

    return (
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                    />
                </div>
                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTask;