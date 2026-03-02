import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        background: "#2c3e50",
        padding: "15px 30px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          marginRight: "auto",
        }}
      >
        ContactsApp
      </span>
      <Link to="/" style={{ color: "#ecf0f1", margin: "10px" }}>
        Home
      </Link>
      <Link to="/add" style={{ color: "#ecf0f1", margin: "10px" }}>
        Add contacts
      </Link>
      <Link to="/contacts" style={{ color: "#ecf0f1", margin: "10px" }}>
        Contacts
      </Link>
    </nav>
  );
}

export default NavBar;
