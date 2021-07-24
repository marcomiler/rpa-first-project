import Spinner from '../components/Spinner';
import Mensaje from '../components/Mensaje';
import "../assets/css/App.css";

import React, { useState } from 'react'

function UseAuthLogin(handleLogged) {

    const [dataLogin, setDataLogin] = useState(
        {
            emailLogin: "",
            passLogin: ""
        }
    );

    const [isError, setError] = useState(false);

    const [enableSpinner, setEnableSpinner] = useState(false);

    const handleInput = (e) => {

        const { value, name } = e.target

        // esto servirá para capturar los valores de cada input
        setDataLogin({
            ...dataLogin,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setEnableSpinner(true);

        const { emailLogin, passLogin } = dataLogin;

        window.Identity.login(emailLogin, passLogin, { rememberMe: true })
            .then(res => {
                // en caso todo bien
                //setTimeout(() => {
                    // desactivamos el spinner
                    setEnableSpinner(false);
                    handleLogged();
                    console.log('aqui entra bien');
                //}, 3000)
            })
            .catch(error => {
                //console.log("Algo ha pasado: ", error)
                //if (error.httpStatus === 401) {
                    //setTimeout(() => {
                        setEnableSpinner(false)

                        setError(true)
                        console.log('aqui es el error');
                        // desaparecer error
                        setTimeout(() => {
                            setError(false)
                        }, 3000)
                    //}, 3000)
                }
            );
    }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <div className="titulo-form">
                        <h3>Iniciar Sesión</h3>
                    </div>
                </div>
                <div className="form-group" >
                    <input className="form-control" type="email" name="emailLogin" placeholder="Ingresa Correo" minLength="2" required onChange={handleInput}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="passLogin" placeholder="Ingresa Contraseña" maxLength="15" pattern="[A-Za-z0-9 @_.]{8,15}" title="ejm: ejemplo@ej123" required onChange={handleInput}></input>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success form-control" value="Iniciar Sesión" name="loginBtn"></input>
                </div>
                {isError ? (
                    <Mensaje mensaje={"Usuario o Contraseña Incorrecta"} />
                ) : (null)}
            </form>
            {
                enableSpinner ? <Spinner></Spinner> : null
            }
        </>
    );
}

export default UseAuthLogin;