import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NavBar from '../../../components/NavBar/NavBar';
import backgroundImage from '../../../assets/foto15.jpg'; // Asegúrate de tener una imagen de fondo
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setValue('email', savedEmail);
      setValue('password', savedPassword);
      setRememberMe(true);
    }
  }, [setValue]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const loginUsers = async (data) => {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  const onSubmit = async (data) => {
    try {
      const response = await loginUsers(data);

      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/dashboard');

        if (rememberMe) {
          localStorage.setItem('email', data.email);
          localStorage.setItem('password', data.password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
      } else {
        console.error('Login failed: No token received');
      }

      console.log('response', response);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-form-container p-5">
          <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="h1 mb-3 fw-normal mt-3">Inicia Sesión</h1>

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

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Recuérdame
                </label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
              <p className="mt-3 mb-3 text-center">
                ¿No tienes cuenta? <a href="/signup">Regístrate</a>
              </p>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default Login;
