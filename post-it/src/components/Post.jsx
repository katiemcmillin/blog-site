import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {config} from "../services"

function Post(props) {
  const { title, body, author, votes } = props.post.fields;
  const [count, setCount] = useState(votes);
  useEffect(() => {
    const handlePatch = async () => {
      const newCount = {
        votes: count,
      };
      const specificURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/posts/${props.post.id}`
      await axios.patch(specificURL, { fields: newCount }, config);
      props.setToggleFetch((curr) => !curr);
    }
    handlePatch();
  }, [props.setToggleFetch, count])

const handleSubmit = (e) => {
  e.preventDefault();
  setCount(count + 1);
}

  return (
    <div>
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
          <form onSubmit={handleSubmit }>
            <button value={votes} type="submit">Upvote</button>
            <span>{votes}</span>
            </form>
      </div>
      </main>
    </div>
  )
}
export default Post;