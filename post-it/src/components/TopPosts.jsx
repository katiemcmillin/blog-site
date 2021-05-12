import Post from "./Post"
function TopPosts(props) {
  const postArray = props.posts;
  const newArray = postArray.sort((a, b) => {
    return b.fields.votes - a.fields.votes;
  });

const topThree = newArray.slice(0, 3);

  return (<>
   <main className="body">
      {topThree.map((post) => (
        <Post id={post.id} post={post} setToggleFetch={props.setToggleFetch}/>
      ))}
    </main> </>)
}
export default TopPosts;