import Home from "./components/Home";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/game" component={Game}></Route>
      <Route path="/home" component={Home}></Route>
    </div>
  );
}

export default App;
