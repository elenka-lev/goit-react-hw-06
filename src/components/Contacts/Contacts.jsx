import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

const Contacts = ({contact, id}) => {
    const dispatch = useDispatch();

    return (
        <ul className={s.wrap}>
            
            <li className={s.item}>
                <div className={s.container}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                </div>
                <button type='submit' onClick={()=>dispatch(removeContact(id))}>Delete</button>
            </li>
            
        </ul>
    )
}

export default Contacts