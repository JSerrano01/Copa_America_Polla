import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(1);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get_matches");
      setMatches(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching matches:", error);
      setLoading(false);
    }
  };

  const handleStoreMatches = async () => {
    setShowLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/store_matches"
      );
      fetchMatches();
      setTimeout(() => {
        setShowLoading(false);
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error storing matches:", error);
      setShowLoading(false);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  if (loading) {
    return (
      <div className="text-slate-100 bg-opacity-75 flex justify-center w-screen p-7">
        Cargando...
      </div>
    );
  }

  const filteredMatches = matches.filter((match) => {
    if (selectedDate === 1) {
      return match[8] === "Group Stage - 1";
    } else if (selectedDate === 2) {
      return match[8] === "Group Stage - 2";
    } else if (selectedDate === 3) {
      return match[8] === "Group Stage - 3";
    } else if (selectedDate === "Cuartos de Final") {
      return match[8] === "Quarter-finals";
    }
    return true;
  });

  return (
    <div className="p-4 md:p-7 relative">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-4 md:p-6 mb-4">
        <h1 className="text-blue-800 text-center mb-4 text-lg md:text-xl">
          RESULTADOS DE LA COPA AMÉRICA 2024
        </h1>
        <div className="flex justify-center mb-4">
          {[1, 2, 3, "Cuartos de Final"].map((date) => (
            <button
              key={date}
              onClick={() => handleDateClick(date)}
              className={`mx-2 px-3 md:px-4 py-2 rounded ${
                selectedDate === date
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
              style={{ fontSize: "0.875rem" }} // Tamaño de fuente relativo
            >
              Fecha {date}
            </button>
          ))}
        </div>
        <ul className="text-blue-500 space-y-2 md:space-y-4 font-bold">
          {filteredMatches.map((match, index) => (
            <li
              key={index}
              className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 items-center text-center border-b border-gray-600 py-2"
            >
              <div className="border-r border-gray-600 md:border-0 pr-2 md:pr-0">
                <img
                  src={match[2]}
                  alt={`${match[1]} logo`}
                  className="w-6 h-6 mx-auto"
                />
              </div>
              <div className="border-r border-gray-600 md:border-0 px-2 md:px-0">
                <span>{match[1]}</span>
              </div>
              <div className="border-r border-gray-600 md:border-0 px-2 md:px-0">
                <span>
                  {match[5]} - {match[6]}
                </span>
              </div>
              <div className="border-r border-gray-600 md:border-0 px-2 md:px-0">
                <span>{match[3]}</span>
              </div>
              <div className="pl-2 md:pl-0">
                <img
                  src={match[4]}
                  alt={`${match[3]} logo`}
                  className="w-6 h-6 mx-auto"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-start">
        <button
          onClick={handleStoreMatches}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ fontSize: "0.875rem" }} // Tamaño de fuente relativo
        >
          Almacenar Partidos
        </button>
      </div>
      {showLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-4 md:p-8 max-w-md w-full text-center">
            <h2 className="text-lg md:text-xl font-bold mb-4">Cargando...</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4">Carga exitosa</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
