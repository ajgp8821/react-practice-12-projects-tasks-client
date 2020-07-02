// Funciones que van a interactuar con el state

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

export default ( state, action ) => {
    switch(action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasks.filter(task =>
                    task.projectId === action.payload
                )
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                taskError: false,
                taskErrorDuplicate: false
            }
        case FORM_VALIDATE_TASK:
            return {
                ...state,
                taskError: true,
                taskErrorDuplicate: false
            }
        case FORM_VALIDATE_TASK_DUPLICATE:
            return {
                ...state,
                taskError: false,
                taskErrorDuplicate: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task =>
                    task.id !== action.payload
                )
            }
        case UPDATE_TASK:
        case STATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? action.payload
                        : task
                ),
                // selectedTask: null
            }
        case ACTUAL_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case CLEAN_TASK:
            return {
                ...state,
                selectedTask: null
            }
        default:
            return state;
    }
}
