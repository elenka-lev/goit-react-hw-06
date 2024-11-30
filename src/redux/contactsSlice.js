import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        //addContact це action, котрий буде виконуватися
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        removeContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id  !== action.payload)
        },
    }
})

export const selectContacts = state => state.contacts.items;

export const { addContact, removeContact } = slice.actions; //іде до компоненту
export const contactReducer = slice.reducer; //іде у стор