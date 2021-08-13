import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import { UserProvider } from "./UserContext";

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
        {/* <UserProvider> */}
          <Switch>
            <Route path="/" component={Register} exact ></Route>
            <Route path="/login" component={Login} exact ></Route>
            <Route path="/forgot" component={Forgot} exact ></Route>
            <Route path="/reset/:randomStr" component={Reset} exact ></Route>
            <Route path="/success" component={Success} exact ></Route>
          </Switch>
        {/* </UserProvider> */}
      </>
    </Router>
  );
}

export default App;