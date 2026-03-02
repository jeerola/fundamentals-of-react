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
      address,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Form to create contacts</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="name"
            style={{ fontSize: "16px", fontWeight: "bold", padding: "5px" }}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insert name"
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              width: "90%",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="phone"
            style={{ fontSize: "16px", fontWeight: "bold", padding: "5px" }}
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Insert phone number"
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              width: "90%",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="email"
            style={{ fontSize: "16px", fontWeight: "bold", padding: "5px" }}
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insert email"
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              width: "90%",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="address"
            style={{ fontSize: "16px", fontWeight: "bold", padding: "5px" }}
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Insert address"
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              width: "90%",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </fieldset>
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#2c3e50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;
