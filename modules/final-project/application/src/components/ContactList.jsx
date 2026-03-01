import initialContacts from "../data/initialContacts";

import { Link } from "react-router-dom";

function ContactList() {
  return (
    <div>
      {initialContacts.map((contact) => (
        <div key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          <p>{contact.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
