import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import initialContacts from "./data/initialContacts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<AddContact setContacts={setContacts} />} />
        <Route
          path="/contacts"
          element={<ContactList contacts={contacts} />}
        />
        <Route
          path="/contacts/:id"
          element={<ContactDetails contacts={contacts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
