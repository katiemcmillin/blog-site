import Post from "./Post"
function Homepage(props) {
  return (
    <main>
      {props.posts.map((post) => (
        <Post post={post} key={post.id} setToggleFetch={props.setToggleFetch} />
      ))}
    </main>
  );
}
export default Homepage;
