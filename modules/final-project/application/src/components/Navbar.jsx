import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ background: "#333", padding: "10px", textAlign: "center" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>
        Home
      </Link>
      <Link to="/add" style={{ color: "white", margin: "10px" }}>
        Add contacts
      </Link>
      <Link to="/contacts" style={{ color: "white", margin: "10px" }}>
        Contacts
      </Link>
    </nav>
  );
}

export default NavBar;

