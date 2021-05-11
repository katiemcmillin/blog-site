import Post from "./Post"
function Homepage(props) {
   return (
     <main>
      {props.posts.map((post) => (
        <Post id={post.id} post={post} />
      ))}
    </main>
  );
}
export default Homepage;
