import { Link } from "react-router-dom";
function Nav() {
  return(
  <header id="nav-container">
    <Link to="/top-posts">Top Posts</Link>
    <Link to="/"><h1>Post-it</h1></Link>
    <Link to="/new">New Post</Link>

    </header>
  )
}
export default Nav;