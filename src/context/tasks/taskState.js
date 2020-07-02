// Definir el state y las funciones con Dispatch hacia los types
import React, { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid';

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { TASKS_PROJECT,
         ADD_TASK,
         FORM_VALIDATE_TASK,
         FORM_VALIDATE_TASK_DUPLICATE,
         DELETE_TASK,
         STATE_TASK,
         ACTUAL_TASK,
         UPDATE_TASK,
         CLEAN_TASK
} from '../../types/index';

const TaskState = props => {
    // Definimos un state inicial
    const initialState = {
        tasks: [
            { id: 1, name: 'Elegir Plataforma', state: true, projectId: 1 },
            { id: 2, name: 'Elegir Colores', state: false, projectId: 2 },
            { id: 3, name: 'Elegir Plataformas de Pago', state: false, projectId: 3 },
            { id: 4, name: 'Elegir Hosting', state: true, projectId: 4 },
            
            { id: 5, name: 'Elegir Plataforma', state: true, projectId: 4 },
            { id: 6, name: 'Elegir Colores', state: false, projectId: 1 },
            { id: 7, name: 'Elegir Plataformas de Pago', state: false, projectId: 2 },
            { id: 8, name: 'Elegir Hosting', state: true, projectId: 3 },
            
            { id: 9, name: 'Elegir Plataforma', state: true, projectId: 3 },
            { id: 10, name: 'Elegir Colores', state: false, projectId: 4 },
            { id: 11, name: 'Elegir Plataformas de Pago', state: false, projectId: 1 },
            { id: 12, name: 'Elegir Hosting', state: true, projectId: 2 },

            { id: 13, name: 'Elegir Plataforma', state: true, projectId: 2 },
            { id: 14, name: 'Elegir Colores', state: false, projectId: 3 },
            { id: 15, name: 'Elegir Plataformas de Pago', state: false, projectId: 4 },
            { id: 16, name: 'Elegir Hosting', state: true, projectId: 1 },
            
        ],
        tasksProject: null,
        taskError: false,
        taskErrorDuplicate: false,
        selectedTask: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    // Obtener las tareas de un proyecto en específico
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    // Agregar nuevas tareas a un proyecto
    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Validar formulario de tareas por errores
    const formValidateTask = () => {
        dispatch({
            type: FORM_VALIDATE_TASK
        })
    }

    // Validar formulario de tareas por nombre duplicado
    const formValidateTaskDuplicate = () => {
        dispatch({
            type: FORM_VALIDATE_TASK_DUPLICATE
        })
    }

    // Eliminar tarea por Id
    const deleteTaskById = idTask => {
        dispatch({
            type: DELETE_TASK,
            payload: idTask
        })
    }

    // Cambia el estado de cada tarea
    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    // Obtener tarea para editar
    const editActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }
    
    // Actualizar una tarea
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    // Elimina la tarea seleccionada para editar
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        // Desde aqui nacen los datos
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                task: state.task,
                taskError: state.taskError,
                taskErrorDuplicate: state.taskErrorDuplicate,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                formValidateTask,
                formValidateTaskDuplicate,
                deleteTaskById,
                changeStateTask,
                editActualTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;
