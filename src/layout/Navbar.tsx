import { Link } from "react-router-dom";
import AllBooks from "../pages/AllBooks";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/books">All Books</Link>
        <Link to="/signin">Sign In</Link>
      </ul>
    </div>
  );
};

export default Navbar;
