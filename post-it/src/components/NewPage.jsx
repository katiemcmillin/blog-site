import axios from "axios";
import { postBaseURL, config } from "../services";
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Changes state variables
function NewPage(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [votes, setVotes] = useState(0);
  const history = useHistory();

//Post request for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      author,
      votes,
    };
    await axios.post(postBaseURL, { fields: newPost }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <main className='body'>
    <form id="new-post" onSubmit={handleSubmit}>
      <div id="input-title">
        <input
          type="text"
          required value={title}
          placeholder="Title"
          maxLength="150"
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div id="input-author">
        <input
          type="text"
          required value={author}
          placeholder="Author"
          maxLength="15"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div id="input-body">
        <textarea
          type="textarea"
          id="form-body"
          required value={body}
          placeholder="Body"
          maxLength="1000"
          onChange={(e) => setBody(e.target.value)}/>
      </div>

        <button className="comment-submit" type="submit">Submit</button>

      </form>
      </main>
  );
}
export default NewPage;
