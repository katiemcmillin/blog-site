import { Link, Route } from "react-router-dom";
import ShowPage from "./ShowPage";
import { useState } from "react";
function Post(props) {
  const { title, body, author } = props.post.fields;
  const [count, setCount] = useState(0);
  function handleClick (e)  {
    e.preventDefault();
    setCount(count + 1);
} 


  return (
    <main id="post-container">
      <h5>{author}</h5>
      <h3>{title}</h3>
      <div id=""></div>
      <div id="text-container">
        <p>{body }</p>
      </div>
      <div id="button-container">
        <Link to={`/show-page/${props.post.id}`}><button>Add Comment</button>
        </Link>
        <Route exact path={`/show-page/${props.post.id}`}><ShowPage post={props.post} /></Route>
        <button onClick={handleClick}>Upvote</button>
        <span>{count}</span>
      </div>
    </main>
  )
}
export default Post;