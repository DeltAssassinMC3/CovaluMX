import React from 'react';
import '../../assets/styles/components/login.scss';
// import './registrar'
const login = () => {

    return(
        <div>
        <meta charSet="UTF-8" />
        <title /> 
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
        {/* <link rel="stylesheet" href="../../assets/styles/components/login.scss" />  */}
        <form className="formulario">
          <h1>Login</h1>
          <div className="contenedor">
            <div className="input-contenedor">
              <i className="fas fa-envelope icon" />
              <input type="text" placeholder="Correo Electronico" />
            </div>
            <div className="input-contenedor">
              <i className="fas fa-key icon" />
              <input type="password" placeholder="Contraseña" />
            </div>
            <input type="submit" defaultValue="Login" className="button" />
            <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
            <p>¿No tienes una cuenta? <a className="link" href="./registrar.jsx">Registrate </a></p>
          </div>
        </form>
      </div>
    );
  }

export default login; 