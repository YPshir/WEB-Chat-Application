import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> {/* Switch will render only the first match */}
          <Route exact path='/' component={Chat} /> {/*to NOT display routs with prefix of '/' */}
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route render={()=><h1>404 page not found</h1>} /> {/* will render only if is not found match */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
