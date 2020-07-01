// Definir el state y las funciones con Dispatch hacia los types
import React, { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT,
         GET_PROJECT, 
         ADD_PROJECT,
         FORM_VALIDATE,
         FORM_VALIDATE_DUPLICATE,
         ACTUAL_PROJECT,
         DELETE_PROJECT
} from '../../types/index';



const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda Virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño de Sitio Web' },
        { id: 4, name: 'MERN' },
    ];

    const initialState = {
        projects: [],
        form: false,
        formError: false,
        formErrorDuplicate: false,
        project: null,
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(projectReducer, initialState);

    // Serie de funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    };

    // Obtener los proyectos
    const getProjects = () => {
        dispatch({
            type: GET_PROJECT,
            payload: projects
        })
    };

    // Agregar nuevo Proyecto
    const addProject = project => {
        project.id = uuidv4();

        // Insertamos el proyecto en el state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    }

    // Validar formulario por errores
    const formValidate = () => {
        dispatch({
            type: FORM_VALIDATE
        })
    }

    // Validar formulario por nombre duplicado
    const formValidateDuplicate = () => {
        dispatch({
            type: FORM_VALIDATE_DUPLICATE
        })
    }

    // Obtener el proyecto seleccionado
    const getActualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }

    // Elimina un proyecto
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        // Desde aqui nacen los datos
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                formErrorDuplicate: state.formErrorDuplicate,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                formValidate,
                formValidateDuplicate,
                getActualProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;
