import axios from "axios";
import { baseURL, config } from "../services";
import { useState } from "react";

function NewPage(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      author,
    };
    await axios.post(baseURL, { fields: newPost }, config);
    props.setToggleFetch((curr) => !curr);
}

  return (
    <form onSubmit={handleSubmit}>
      <div id="input-title">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        </div>
            <div id="input-author">
        <input
          type="text"
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />

      </div>


<button type="submit">Submit</button>
    </form>
  )
}
export default NewPage;