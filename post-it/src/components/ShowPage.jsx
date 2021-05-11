import { useParams } from "react-router-dom";
import Comment from "./Comment"
import CommentForm from "./CommentForm"

function ShowPage(props) {
const params = useParams();
const post = props.posts.find((post) => post.id === params.id);
console.log(post)
  return ( 
  <div>
     <h5>{post.fields.author}</h5>
     <h3>{post.fields.title}</h3>
     <div id=""></div>
     <div id="text-container">
       <p>{post.fields.body}</p>
      </div>
      <ul>
        {post.fields.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
      <CommentForm post={post} setToggleFetch={props.setToggleFetch} />
  </div>
    )
}
export default ShowPage;