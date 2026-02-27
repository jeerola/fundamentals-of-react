import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
