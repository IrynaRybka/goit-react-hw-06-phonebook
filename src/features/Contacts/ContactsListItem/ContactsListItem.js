import { deleteContact } from '../../store/Contacts.slice';
import { useDispatch, useSelector } from 'react-redux';
import {selectNameContact} from '../../store/selectors';
import css from './ContactsListItem.module.css';
import { ImBin } from 'react-icons/im';


export const ContactListItem = () => {
    const filteredContacts = useSelector(selectNameContact);
    const dispatch = useDispatch();

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id))
      }

    return (      
    <>
        {filteredContacts.map(contact => (
          <li className={css.contact_item} key={contact.id}>
            <p className={css.contact_name}>{contact.name}</p>
          <p className={css.contact_number}>{contact.phone}</p>
         <button className={css.delete_button} onClick={()=> onDeleteContact(contact.id)}> <ImBin/></button>
          </li>
        ))}
     </> )
}