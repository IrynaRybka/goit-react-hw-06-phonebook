import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
    filter: ""
}

const contactsSlise = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        },
        deleteContact: (state, action) => {
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload,)
            }
        },
        setFilterContact: (state, action) => {
          state.filter = action.payload;
        }
    }
})

export const {addContact, deleteContact, setFilterContact} = contactsSlise.actions;
export default contactsSlise.reducer;