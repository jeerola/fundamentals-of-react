import { useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id.toString() === id);

  if (!contact) return <p>Contact not found!</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{contact.name}</h1>
      <div
        style={{ background: "#f5f5f5", padding: "20px", borderRadius: "8px" }}
      >
        <p style={{ fontSize: "16px", color: "#2c3e50" }}>
          Phone: {contact.phone}
        </p>
        <p style={{ fontSize: "16px", color: "#2c3e50" }}>
          Email: {contact.email}
        </p>
        <p style={{ fontSize: "16px", color: "#2c3e50" }}>
          Address: {contact.address}
        </p>
      </div>
    </div>
  );
}
export default ContactDetails;
