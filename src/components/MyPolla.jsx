import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get_user", {
        withCredentials: true  // Enviar cookies con la solicitud
      });
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-7">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-4">
        <h1 className="text-blue-800 text-center mb-4">
          Detalles del Usuario en Sesión
        </h1>
        {loading ? (
          <p>Cargando...</p>
        ) : user ? (
          <div>
            <p>ID: {user.id}</p>
            <p>Nombre: {user.username}</p>
            <p>Correo: {user.email}</p>
            {/* Agrega más campos según los datos que recibas */}
          </div>
        ) : (
          <p>No se encontraron detalles de usuario.</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
