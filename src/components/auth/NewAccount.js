import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

    // State para iniciar sesión
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    });

    // Extraer de usuario
    const { name, email, password, confirm } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        });
    };

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacíos

        // Password minimo de 6 caracteres

        // Los dos password sean iguales

        // Pasarlo al action
    };

    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="confirm">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirmar Password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>

                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link 
                    to={'/'}
                    className="link-account"
                >
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;
