import { useParams } from "react-router-dom";
import Comment from "./Comment"
import CommentForm from "./CommentForm"


function ShowPage(props) {
  const params = useParams();
  const post = props.posts.find((post) => post.id === params.id);
  if (!post) {
    return (
      <h3>Loading...</h3>
    )
  }
  const { author, title, body, comments } = post.fields;

  return ( 
  <div className="whole-post-container">
     <h5 className="username">{author}</h5>
     <h3>{title}</h3>
     <div id=""></div>
      <div id="text-container">
        <div className="wrapper-div"><p>{body }</p></div>
      </div>
      <ul>
        {comments && comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
        <CommentForm post={post} setToggleFetch={props.setToggleFetch} />
        </div>
    

    )
}
export default ShowPage;