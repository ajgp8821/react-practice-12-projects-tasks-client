import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // State para iniciar sesión
    const [ user, setUser ] = useState({
        email: '',
        password: '',
    });

    // Extraer de usuario
    const { email, password } = user;

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

        // Pasarlo al action
    };

    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link 
                    to={'/new-account'}
                    className="link-account"
                >
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;
