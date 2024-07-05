import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import styled from "styled-components";

// Estilos personalizados para la tabla
const CustomStyles = {
  table: {
    style: {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      opacity: 0.5,
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
      color: "black",
    },
  },
  cells: {
    style: {
      fontWeight: "bold",
      color: "#408AF7",
    },
  },
};

// Contenedor para la barra de búsqueda
const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

// Barra de búsqueda
const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Pollas = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("A");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get_pollas");
      setMatches(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching matches:", error);
      setLoading(false);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredMatches = matches.filter((match) => {
    const groupMatches = match[2] === selectedDate;
    const textMatches =
      match[1].toLowerCase().includes(filterText.toLowerCase()) ||
      match[3].toLowerCase().includes(filterText.toLowerCase());
    return groupMatches && textMatches;
  });

  const columns = [
    {
      name: "NOMBRE",
      selector: (row) => row[1],
      sortable: true,
    },
    {
      name: "PRIMERO",
      selector: (row) => row[3],
      sortable: true,
    },
    {
      name: "SEGUNDO",
      selector: (row) => row[4],
      sortable: true,
    },
    {
      name: "PUNTOS DE ACIERTO",
      selector: (row) => row[5],
      sortable: true,
    },
  ];

  return (
    <div className="p-7 relative">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-4 h-max">
        <h1 className="text-blue-800 text-center mb-4">
          RESULTADOS GRUPOS POLLA DE LA COPA AMÉRICA 2024
        </h1>
        <div className="flex justify-center mb-4">
          {["A", "B", "C", "D"].map((date) => (
            <button
              key={date}
              onClick={() => handleDateClick(date)}
              className={`mx-2 px-4 py-2 rounded ${
                selectedDate === date
                  ? "bg-blue-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-500"
              }`}
            >
              GRUPO {date}
            </button>
          ))}
        </div>
        <FilterContainer>
          <FilterInput
            type="text"
            placeholder="Buscar..."
            value={filterText}
            onChange={handleFilterChange}
          />
        </FilterContainer>
        <DataTable
          columns={columns}
          data={filteredMatches}
          customStyles={CustomStyles}
          progressPending={loading}
          pagination
        />
      </div>
    </div>
  );
};

export default Pollas;
