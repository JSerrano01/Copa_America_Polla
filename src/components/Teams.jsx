import React, { useEffect, useState } from "react";
import axios from "axios";

const Teams = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get_groups");
      setMatches(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching matches:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-slate-100 bg-opacity-75 flex justify-center w-screen p-7">
        Cargando...
      </div>
    );
  }

  return (
    <div className="p-7 relative">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-4">
        <h1 className="text-blue-800 text-center mb-4">
          GRUPOS COPA AMÉRICA 2024
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Grupos */}
          {["A", "B", "C", "D"].map((grupo) => (
            <div
              key={grupo}
              className="bg-blue-700 bg-opacity-75 rounded-lg shadow-lg p-6 mb-4"
            >
              <h2 className="text-white mb-2 text-center">Grupo {grupo}</h2>
              {matches
                .filter((match) => match[1] === grupo)
                .map((match, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-2">
                    <div className="text-white text-left flex items-center">
                      <img
                        className="h-6 w-auto object-contain"
                        src={match[4]}
                        alt=""
                      />
                    </div>
                    <div className="text-white text-left flex items-center">
                      <p>{match[2]}</p>
                    </div>
                    <div className="text-white text-left">
                      <p>Puntos: {match[3]}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
