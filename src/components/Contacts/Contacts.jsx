import { useDispatch } from 'react-redux';
import s from './Contacts.module.css';
import { removeContact } from '../../redux/contactsSlice';

const Contacts = ({contact, id}) => {
    const dispatch = useDispatch();

    return (
        <ul className={s.wrap}>
            
            <li className={s.item}>
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                <button type='submit' onClick={()=>dispatch(removeContact(id))}>Delete</button>
            </li>
            
        </ul>
    )
}

export default Contacts