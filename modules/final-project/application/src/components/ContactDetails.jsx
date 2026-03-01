import { useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id.toString() === id);

  if (!contact) return <p>Contact not found!</p>

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
}
export default ContactDetails;
