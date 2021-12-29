import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Index from "./components/layout";

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
