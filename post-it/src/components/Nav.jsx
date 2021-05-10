import { Link } from "react-router-dom";
function Nav() {
  return(
  <header id="nav-container">
    <Link to="/posts-of-the-day">Posts of the day</Link>
    <Link to="/"><h1>Post-it</h1></Link>
    <Link to="/new">New Post</Link>

    </header>
  )
}
export default Nav;