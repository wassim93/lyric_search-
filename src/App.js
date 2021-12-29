import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Index from "./components/layout";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
