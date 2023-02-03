import { useSelector } from 'react-redux';

import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';
import { ContactFilter } from '../ContactsFilter/ContactsFilter';

export const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      {contacts.length > 0 && <h2 style={{textAlign: "center"}}>You have {contacts.length} contacts</h2>}
      <ContactFilter />
      <ContactsForm />
      {contacts.length > 0 && <ContactList />}
      {contacts.length < 1 && <p style={{textAlign: "center", fontSize: '20px', }} >No contacts yet.</p>} 
    </>
  );
};
