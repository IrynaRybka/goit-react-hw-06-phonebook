// import { createSelector } from '@reduxjs/toolkit';

// export const sContacts = state => state.contacts.contacts;
// export const sFilter = state => state.filter.filter;

// export const selectNameContact = createSelector(
//   [sContacts, sFilter],
//   (contacts, filter) => {
//     return contacts.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.filter.toLowerCase())
//     );
//   }
// );
export const selectNameContact = (state) => {
return state.contacts.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
})
}
