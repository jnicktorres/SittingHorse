import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CharacterSheetPage from "./pages/CharacterSheetPage.jsx";

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/charactersheet" element={<CharacterSheetPage />} />
    </Routes>
  );
}

export default App;
