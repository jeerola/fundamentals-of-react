import { Link } from "react-router-dom";

function ContactList({ contacts }) {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          style={{
            background: "#f5f5f5",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to={`/contacts/${contact.id}`}
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#2c3e50",
            }}
          >
            {contact.name}
          </Link>
          <span style={{ color: "gray" }}>{contact.phone}</span>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
