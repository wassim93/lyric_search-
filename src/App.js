import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Index from "./components/layout/Index";
import Lyrics from "./components/lyrics/Lyrics";
import { Provider } from "./context";

const App = () => {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
