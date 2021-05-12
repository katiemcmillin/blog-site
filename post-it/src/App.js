import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NewPage from "./components/NewPage";
import TopPosts from "./components/TopPosts";
import ShowPage from "./components/ShowPage";
import { useEffect, useState } from "react";
import { postBaseURL, commentBaseURL, config } from "./services";

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPostsAndComments = async () => {
      const postResponse = await axios.get(postBaseURL, config);
      const commentResponse = await axios.get(commentBaseURL, config);
      const retrievedComments = commentResponse.data.records;
      const retrievedPosts = postResponse.data.records.map((post) => {
        return {
          ...post,
          fields: {
            ...post.fields,
            comments: post.fields.comments ? retrievedComments.filter((comment) => post.fields.comments.includes(comment.id)) : []
          }
        }
      });
      setPosts(retrievedPosts)
    };
    fetchPostsAndComments();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Homepage setToggleFetch={setToggleFetch} posts={posts} />
      </Route>
      <Route exact path="/new">
        <NewPage setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/top-posts">
        <TopPosts posts={posts} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path={`/show-page/:id`}>
        <ShowPage posts={posts} setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
