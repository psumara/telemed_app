import Home from "./components/Home";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";
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
      <Route path="/scoreboard" component={Scoreboard}></Route>
      <Footer />
    </div>
  );
}

export default App;
