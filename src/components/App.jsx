import Layout from "./Layout/Layout";
import ContactForm from "./ContactForm/ContactForm";
import SearchBar from "./SearchBar/SearchBar";
import ContactsList from "./ContactsList/ContactsList";

const App = () => {
  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBar />
        <ContactsList/>
      </Layout>
    </>
)
}

export default App;