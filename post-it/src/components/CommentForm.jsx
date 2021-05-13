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
    <form onSubmit={handleSubmit}>
      <input id="comment" required value={content} placeholder="content" onChange={(e) => setContent(e.target.value)} />
      <input id="comment-author" required value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Make A Comment!</button>
    </form>
  )
}

export default CommentForm;
