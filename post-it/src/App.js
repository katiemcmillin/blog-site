import './App.css';
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage"
import NewPage from "./components/NewPage"

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path="/new">
        <NewPage />
      </Route>
    </div>
  );
}

export default App;
