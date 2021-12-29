import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
