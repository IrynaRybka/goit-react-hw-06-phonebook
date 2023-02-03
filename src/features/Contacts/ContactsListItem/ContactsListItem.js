import { deleteContact } from '../../store/Contacts.slice';
import { useDispatch, useSelector } from 'react-redux';
import {selectNameContact} from '../../store/selectors';

export const ContactListItem = () => {
    const filteredContacts = useSelector(selectNameContact);
    const dispatch = useDispatch();

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id))
      }

    return (      
    <>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
          <p>{contact.phone}</p>
         <button onClick={()=> onDeleteContact(contact.id)}>Delete contact</button>
          </li>
        ))}
     </> )
}