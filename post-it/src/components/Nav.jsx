import { Link } from "react-router-dom";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Nav() {
  return(
  <header id="nav-container">
    <Link id="left-link" to="/top-posts">Top Posts</Link>
    <Link to="/"><h1>Post-it</h1></Link>
      <Link id="right-link" to="/new">New Post <FontAwesomeIcon icon={faCommentAlt} /></Link>

    </header>
  )
}
export default Nav;