import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/electronics">Electronic List</Link>
      <Link to="/electronics/new">Add New Item</Link>

    </div>
  );
}

export default NavBar;