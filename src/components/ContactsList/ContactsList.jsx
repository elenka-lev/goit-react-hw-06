import { useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import Contacts from '../Contacts/Contacts';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';

const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredData = contacts.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div className={s.container}>
            <ul className={s.wrapper}>
                {filteredData.map((contact) => (
                    <li key={contact.id} className={s.item}>
                        <Contacts contact={contact} id={contact.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactsList;