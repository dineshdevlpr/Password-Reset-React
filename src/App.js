import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




// Importing Routes
import Register from "./routes/register";
import Login from "./routes/login";
import Forgot from "./routes/forgot";
import Reset from "./routes/reset";
import Success from "./routes/success";

function App() {
  return (
    <Router>
      <>
        
          <Switch>
            <Route path="/" component={Register} exact ></Route>
            <Route path="/login" component={Login} exact ></Route>
            <Route path="/forgot" component={Forgot} exact ></Route>
            <Route path="/reset/:randomString" component={Reset} exact ></Route>
            <Route path="/success" component={Success} exact ></Route>
          </Switch>
        
      </>
    </Router>
  );
}

export default App;