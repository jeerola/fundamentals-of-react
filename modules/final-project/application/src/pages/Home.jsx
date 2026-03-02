function Home() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contacts application</h1>
      <ul>
        <li>
          <strong>Home</strong> - Overview of the application and its views.
        </li>
        <br />
        <li>
          <strong>Add Contact</strong> - A form for adding new contacts with
          name, phone, email and address. Implemented using useState hooks for
          controlled inputs and an onSubmit handler that adds the new contact to
          the shared state in App.jsx.
        </li>
        <br />
        <li>
          <strong>Contact Details</strong> - Displays all details of a selected
          contact. Implemented using dynamic routing (/contacts/:id) and the
          useParams hook to find the correct contact from the contacts array.
        </li>
        <br />
        <li>
          <strong>Contact List</strong> - A list of all contacts showing name
          and phone number. Implemented using the map() method and React
          Router's Link component for navigation to contact details.
        </li>
      </ul>
    </div>
  );
}
export default Home;
