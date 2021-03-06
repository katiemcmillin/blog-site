import { Link } from "react-router-dom";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import {faComment} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import axios from "axios";
import {config} from "../services"

function Post(props) {
  const { title, body, author, votes } = props.post.fields;
  const [count, setCount] = useState(votes);
  //adds upvotes
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
    <div className="whole-post-container">
    <main id="post-container">
      <h5 className="username">{author}</h5>
      <h3>{title}</h3>
      <div id=""></div>
      <div id="text-container">
        <div className="wrapper-div"><p>{body }</p></div>
      </div>
        <div id="button-container">
          <span id="button-label">Comment</span>
          <Link to={`/show-page/${props.post.id}`}><button id="comment-button"><FontAwesomeIcon icon={faComment} /></button>
          </Link>
          <form onSubmit={handleSubmit }>
            <button id="up-arrow" value={votes} type="submit"><FontAwesomeIcon icon={faAngleUp}/></button>
            <span>{votes}</span>
            </form>
      </div>
      </main>
    </div>
  )
}
export default Post;
