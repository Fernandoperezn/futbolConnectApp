import React, { useState } from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import backgroundImage from '../../../assets/1.jpg';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const createUser = async (userData) => {
    const response = await fetch('http://localhost:3000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  const onSubmit = async (data) => {
    try {
      const response = await createUser(data);
      if (response) {
        navigate('/login'); // Redirige al usuario a la página de inicio de sesión
      }
      console.log('response', response);
    } catch (error) {
      console.log('error', error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="signup-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="signup-form-container p-5">
          <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="h1 mb-3 fw-normal">Regístrate</h1>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  {...register('email', { required: true })}
                />
                <label htmlFor="email">Correo electrónico</label>
              </div>

              <div className="form-floating mb-3 position-relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register('password', { required: true })}
                />
                <label htmlFor="password">Contraseña</label>
                <button
                  type="button"
                  className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
                  onClick={togglePasswordVisibility}
                  style={{ border: 'none', background: 'none' }}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">Regístrate</button>
              <p className="mt-3 mb-3 text-center">
                ¿Ya tienes cuenta? <a href="/login">Inicia Sesión</a>
              </p>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default Signup;
