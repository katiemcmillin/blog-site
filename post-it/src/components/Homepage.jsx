import Post from "./Post"
function Homepage(props) {
   return (
     <main>
      {props.posts.map((post) => (
        <Post post={post} />
      ))}
    </main>
  );
}
export default Homepage;
