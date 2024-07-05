import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false); // Estado para mostrar la ventana emergente de carga

    useEffect(() => {
        fetchMatches();
    }, []);

    const fetchMatches = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get_matches');
            setMatches(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching matches:", error);
            setLoading(false);
        }
    };

    const handleStoreMatches = async () => {
        setShowLoading(true); // Mostrar ventana emergente de carga al iniciar el proceso
        try {
            const response = await axios.post('http://localhost:5000/api/store_matches');
            fetchMatches(); // Actualiza los partidos después de almacenarlos
            // Simular carga exitosa y recargar la página después de 1 segundo
            setTimeout(() => {
                setShowLoading(false); // Ocultar ventana emergente de carga
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error("Error storing matches:", error);
            setShowLoading(false); // Ocultar ventana emergente de carga en caso de error
        }
    };

    if (loading) {
        return <div className='text-slate-100 bg-opacity-75 flex justify-center w-screen p-7'>Cargando...</div>;
    }

    return (
        <div className='p-7 relative'>
            <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-4 h-max">
                <h1 className='text-blue-800 text-center mb-4'>RESULTADOS DE LA COPA AMÉRICA 2024</h1>
                <ul className='text-blue-500 space-y-4'>
                    {matches.map((match, index) => (
                        <li key={index} className='text-center'>
                            <img src={match[2]} alt={`${match[1]} logo`} className='inline-block w-6 h-6 mr-2' />
                            {match[1]} vs {match[3]} <img src={match[4]} alt={`${match[3]} logo`} className='inline-block w-6 h-6 mr-2' /> : {match[5]} - {match[6]}
                        </li>
                    ))}
                </ul>

            </div>
            {/* Botón Almacenar Partidos debajo y a la izquierda del contenedor */}
            <div className="flex justify-start">
                <button onClick={handleStoreMatches} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Almacenar Partidos
                </button>
            </div>
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
        </div>
    );
};

export default Home;
