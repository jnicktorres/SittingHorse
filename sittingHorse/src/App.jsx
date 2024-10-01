<<<<<<< Updated upstream
import { useState, useEffect } from "react";
import "./App.css";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
>>>>>>> Stashed changes
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
=======

function App() {
  const [count, setCount] = useState(0)
>>>>>>> parent of 3b8a8b0 (Merge pull request #7 from jnicktorres/feature/backend)

  return (
<<<<<<< Updated upstream
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/charactersheet" element={<CharacterSheetPage />} />
    </Routes>
  );
=======
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
<<<<<<< HEAD
        {
          array.map((fruit, index) => (
            <div key={index}>
              <p>{fruit}</p>
              <br></br>
            </div>
          ))
        }
      </div> */}
      <DataComponent />
=======
      </div>
>>>>>>> parent of 3b8a8b0 (Merge pull request #7 from jnicktorres/feature/backend)
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
>>>>>>> Stashed changes
}

export default App;
