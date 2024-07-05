import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teams = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get_groups');
            setMatches(response.data);
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching matches:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className='text-slate-100 bg-opacity-75 flex justify-center w-screen p-7'>Cargando...</div>;
    }

    return (
<div className='p-7 relative'>
    <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-4">
        <h1 className='text-blue-800 text-center mb-4'>GRUPOS COPA AMÉRICA 2024</h1>
        <div className='grid grid-cols-4 gap-4'>
            {/* Grupo A */}
            <div className='bg-blue-700 bg-opacity-75 rounded-lg shadow-lg p-6 mb-4'>
                <h2 className='text-white mb-2 text-center'>Grupo A</h2>
                {matches.filter(match => match[1] === 'A').map((match, index) => (
                    <div key={index} className='grid grid-cols-2'>
                        <div className='text-white text-left'>
                            <p>{match[2]}</p>
                        </div>
                        <div className='text-white text-left'>
                            <p>Puntos: {match[3]}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Grupo B */}
            <div className='bg-blue-700 bg-opacity-75 rounded-lg shadow-lg p-6 mb-4'>
                <h2 className='text-white mb-2 text-center'>Grupo B</h2>
                {matches.filter(match => match[1] === 'B').map((match, index) => (
                    <div key={index} className='grid grid-cols-2'>
                        <div className='text-white text-left'>
                            <p>{match[2]}</p>
                        </div>
                        <div className='text-white text-left'>
                            <p>Puntos: {match[3]}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Grupo C */}
            <div className='bg-blue-700 bg-opacity-75 rounded-lg shadow-lg p-6 mb-4'>
                <h2 className='text-white mb-2 text-center'>Grupo C</h2>
                {matches.filter(match => match[1] === 'C').map((match, index) => (
                    <div key={index} className='grid grid-cols-2'>
                        <div className='text-white text-left'>
                            <p>{match[2]}</p>
                        </div>
                        <div className='text-white text-left'>
                            <p>Puntos: {match[3]}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Grupo D */}
            <div className='bg-blue-700 bg-opacity-75 rounded-lg shadow-lg p-6 mb-4'>
                <h2 className='text-white mb-2 text-center'>Grupo D</h2>
                {matches.filter(match => match[1] === 'D').map((match, index) => (
                    <div key={index} className='grid grid-cols-2'>
                        <div className='text-white text-left'>
                            <p>{match[2]}</p>
                        </div>
                        <div className='text-white text-left'>
                            <p>Puntos: {match[3]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    );
};

export default Teams;
