import React, { useContext, useState, useEffect } from 'react'
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    // Obtener el state de los projectos
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    // Obtener el state de las tareas
    const tasksContext = useContext(TaskContext);
    const { tasks, taskError, taskErrorDuplicate, selectedTask,
            getTasks, addTask, formValidateTask, formValidateTaskDuplicate, updateTask, cleanTask } = tasksContext;

    // UseEffect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (selectedTask !== null) {
            setTask(selectedTask)
        }
        else {
            setTask({
                name: ''
            })
        }
    }, [selectedTask]);

    // State del formulario
    const [ task, setTask ] = useState({
        name: ''
    });

    // Obtener el nombre del proyecto
    const { name } = task;

    if ( !project ) return null;
    // Array destructuring para extraer el proyecto actual
    const [ actualProject ] = project;

    // Leer los valores del formulario
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar tarea
        if (name.trim() === '') {
            formValidateTask();
            return;
        }

        

        // Validar que no esté duplicado
        for (let i = 0; i < tasks.length; i++) {
            // console.log('task[i].name: ' + tasks[i].name + '| name: ' + name);
            // console.log('task[i].projectId:', tasks[i].projectId);
            if(tasks[i].projectId === actualProject.id && tasks[i].name.trim() === name.trim()){
                // console.log('truee');
                formValidateTaskDuplicate();
                return;
            }
        }

        // Revisar si es edición o nueva tarea
        if (selectedTask === null){
            // Agregar la nueva tarea al state de tarea
            task.projectId = actualProject.id;
            task.state = false;
            addTask(task);
        }
        else {
            updateTask(task);

            // Elimina tarea seleccionada del state
            cleanTask();
        }

        // Reiniciar el form
        setTask({
            name: ''
        });

        // Obtener y filtrar las tareas del proyecto actual
        getTasks(actualProject.id);
    }

    return (
        <div className="form">
            <form
                onSubmit={onSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value={selectedTask ? "Actualizar tarea" : "Agregar tarea"}
                    />
                </div>
            </form>
            { taskError ? <p className="message error">El nombre de la Tarea es obligatorio</p> : null}
            { taskErrorDuplicate ? <p className="message error">El nombre de la Tarea ya  esta repetido en el Proyecto</p> : null}
        </div>
    );
}

export default FormTask;