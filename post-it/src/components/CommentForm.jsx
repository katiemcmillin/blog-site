import { useState } from "react";
import axios from "axios";
import { commentBaseURL, config } from "../services";

function CommentForm(props) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      author,
      content,
      posts: [props.post.id]
    };
    await axios.post(commentBaseURL, { fields: newComment }, config);
    props.setToggleFetch((curr) => !curr);
    setAuthor("");
    setContent("");
  }

  return  (
    <form id="comment-container" onSubmit={handleSubmit}>
      <input id="comment" required value={content} placeholder="content" onChange={(e) => setContent(e.target.value)} />
      <input id="comment-author" required value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
      <button className="comment-submit" type="submit">Submit</button>
    </form>
  )
}

export default CommentForm;
