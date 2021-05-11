import { useParams } from "react-router-dom";
function ShowPage(props) {
const params = useParams();
const post = props.posts.find((post) => post.id === params.id);

  return ( 
  <div>
     <h5>{post.fields.author}</h5>
     <h3>{post.fields.title}</h3>
     <div id=""></div>
     <div id="text-container">
       <p>{post.fields.body}</p>
     </div>
  </div>
    )
}
export default ShowPage;