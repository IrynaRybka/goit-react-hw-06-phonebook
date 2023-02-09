import { createSlice } from '@reduxjs/toolkit';
// import { status } from './status.contacts';
import { addContactsAsyncThunk, deleteContactsAsyncThunk, getContactsAsyncThunk } from './contacts.thunk';

const initialState = {
//   status: status.idle,
  contacts: [],
  isLoading: false, 
  error: null
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
  extraReducers: {
    [getContactsAsyncThunk.pending]: state => {
        state.isLoading = true;
        state.error = null;
    },
    [getContactsAsyncThunk.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
    },
    [getContactsAsyncThunk.rejected]: (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
    },
    [deleteContactsAsyncThunk.pending] : state => {
        state.isLoading = true;
        state.error = null;
    },
    [deleteContactsAsyncThunk.fulfilled] : (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload);
        state.error = null;
    },
    [deleteContactsAsyncThunk.rejected] : (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
    },
    [addContactsAsyncThunk.pending] : state => {
        state.isLoading = true;
        state.error = null;
    },
    [addContactsAsyncThunk.fulfilled] : (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [].concat(action.payload, state.contacts)
    },
    [addContactsAsyncThunk.rejected] : (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
    },
  },
});

export const {
  addContact,
  deleteContact,
} = contactsSlise.actions;
export default contactsSlise.reducer;
