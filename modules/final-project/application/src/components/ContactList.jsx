import { Link } from "react-router-dom";

function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          <p>{contact.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
