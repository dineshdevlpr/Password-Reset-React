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
            <Route path="/" component={Register} exact={true} ></Route>
            <Route path="/login" component={Login} exact={true} ></Route>
            <Route path="/forgot" component={Forgot} exact={true} ></Route>
            <Route path="/reset/:randomString" component={Reset} exact={true} ></Route>
            <Route path="/success" component={Success} exact={true} ></Route>
          </Switch>
        
      </>
    </Router>
  );
}

export default App;
