import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NewPage from "./components/NewPage";
import PostsOfTheDay from "./components/PostOfTheDay"
import { useEffect } from "react";
import { baseURL, config } from "./services";

function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(baseURL, config);
      console.log(response.data.records)
    }
    fetchPosts();
}, [])

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/new">
        <NewPage />
      </Route>
      <Route exact path="/posts-of-the-day">
        <PostsOfTheDay />
      </Route>
    </div>
  );
}

export default App;
