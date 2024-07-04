import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import backgroundImage from '../assets/static/1.jpeg'; // Ruta a tu imagen de fondo

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [showLoading, setShowLoading] = useState(false); // Estado para mostrar la ventana emergente de carga
  const navigate = useNavigate(); // Hook useNavigate para la navegación

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoading(true); // Mostrar ventana emergente de carga
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });
      console.log(response.data);
      // Aquí podrías manejar la respuesta del backend, por ejemplo, mostrar un mensaje de éxito o error
      if (response.status === 200) {
        setTimeout(() => {
          setShowLoading(false); // Ocultar ventana emergente de carga
          navigate('/home'); // Redirigir al usuario a la vista del Header
        }, 3000); // Simular carga exitosa por 3 segundos
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      setShowLoading(false); // Si hay error, ocultar la ventana emergente de carga
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white bg-opacity-80 shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        {loginError && (
          <p className="text-red-500 text-sm mt-2">{loginError}</p>
        )}
        {/* Ventana emergente de carga */}
        {showLoading && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
              <h2 className="text-xl font-bold mb-4">Cargando...</h2>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <p className="mt-4">Carga exitosa</p>
            </div>
          </div>
        )}
        {/* Enlace a la vista del Header */}
        {/* <p className="text-center mt-4">
          <Link to="/header" className="text-blue-500 hover:underline">
            Go to Header
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginForm;
