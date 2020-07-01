import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // Obtener el state del formulario
    const projectsContext = useContext(ProjectContext);
    const { projects, form, formError, formErrorDuplicate, showForm, addProject, formValidate, formValidateDuplicate } = projectsContext;

    // State para proyecto
    const [ project, setProject ] = useState({
        name: ''
    });

    // Extraer nombre del proyecto
    const { name } = project;

    // Lee los contenidos del Input
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value,
        });
    };

    // Cuando el usuario envía un proyecto
    const onSubmitProject = e => {
        e.preventDefault();

        // Validar el proyecto
        if (name === '') {
            formValidate();
            return;
        }

        // Validar que no esté duplicado
        for (let i = 0; i < projects.length; i++) {
            // console.log(projects[i].name);
            if(projects[i].name === name){
                // console.log('truee');
                formValidateDuplicate();
                return;
            }
        }

        // Agregar al state
        addProject(project)

        // Reiniciar el form
        setProject({
            name: ''
        });
    };

    // Mostrar formulario
    const onClickShowForm = () => {
        showForm();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={onClickShowForm}
            >Nuevo Proyecto</button>

            {form
            ?
                <form className="form-new-project"
                    onSubmit={onSubmitProject}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="name"
                        value={name}
                        onChange={onChangeProject}
                    />
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Agregar Proyecto"
                    />
                </form>
            :
                null
            }
            { formError ? <p className="message error">El nombre del Proyecto es obligatorio</p> : null}
            { formErrorDuplicate ? <p className="message error">El nombre del Proyecto esta repetido</p> : null}

        </Fragment>
    );
}

export default NewProject;
