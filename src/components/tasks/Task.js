import React from 'react'
import PropTypes from 'prop-types';

const Task = ({ task }) => {
    return (
        <li className="task shadow">
            <p>{task.name}</p>

            <div className="state">
                {task.state
                ?
                    (
                        <button
                            type="button"
                            className="complete"
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incomplete"
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    >Editar</button>

                <button
                    type="button"
                    className="btn btn-secondary"
                >Eliminar</button>
            </div>
        </li>
    );
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Task;
