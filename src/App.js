import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RaindropMatrix from "./components/Effects/MatrixRainEffect";

import Scoreboard from "./components/Scoreboard/Scoreboard";
import "./components/Scoreboard/style.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RaindropMatrix>
                <Scoreboard />
              </RaindropMatrix>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
