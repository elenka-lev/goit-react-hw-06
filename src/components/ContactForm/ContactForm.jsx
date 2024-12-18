import { Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useId } from 'react';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contactNameId = useId();
    const contactPhoneId = useId();
    const initialValues = {
        name: '',
        phone: '',
    }
    const onSubmit = (values, options) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            phone: values.phone,
        }
        dispatch(addContact(newContact))
        options.resetForm()
    }
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form className={s.form}>
                <label htmlFor={contactNameId}>Enter the name</label>
                <Field type='text' className={s.input} name='name' id={contactNameId} /> 
                <label htmlFor={contactPhoneId}>Enter the phone</label>
                <Field type='phone' className={s.input} name='phone' id={contactPhoneId} />
                <button className={s.btn} type='submit' >Add contact</button>
            </Form>
    </Formik>
)
}
export default ContactForm;