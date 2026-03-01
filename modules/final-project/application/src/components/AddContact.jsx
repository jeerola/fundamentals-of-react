import { useState } from "react";

function AddContact({ setContacts }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      address
    };
    setContacts(prev => [...prev, newContact]);
  }

  return (
    <div>
      <h2>Form to create contacts</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insert name"
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Insert phone number"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insert email"
            required
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Insert address"
            required
          />
        </fieldset>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

export default AddContact;
