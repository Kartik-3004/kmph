import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Loginpage from "./Pages/Loginpage";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Loginpage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
