// Funciones que van a interactuar con el state

import { FORM_PROJECT,
         GET_PROJECT,
         ADD_PROJECT,
         FORM_VALIDATE,
         FORM_VALIDATE_DUPLICATE,
         ACTUAL_PROJECT,
         DELETE_PROJECT
} from '../../types/index';

export default ( state, action ) => {
    switch(action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true,
            }
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                formError: false,
                formErrorDuplicate: false
            }
        case FORM_VALIDATE:
            return {
                ...state,
                formError: true
            }
        case FORM_VALIDATE_DUPLICATE:
            return {
                ...state,
                formErrorDuplicate: true
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                project: state.projects.filter(project => 
                    project.id === action.payload
                )
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => 
                    project.id !== action.payload
                ),
                project: null
            }
        default:
            return state;
    }
}
