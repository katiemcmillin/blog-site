import Post from "./Post"
function Homepage(props) {
   return (
     <main className="body">
      {props.posts.map((post) => (
        <Post id={post.id} post={post} setToggleFetch={props.setToggleFetch}/>
      ))}
    </main>
  );
}
export default Homepage;
