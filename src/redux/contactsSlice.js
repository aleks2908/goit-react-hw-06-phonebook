import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },

  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(item => item.id !== payload);
      //   const index = state.contacts.findIndex(item => item.id === payload);
      //   state.contacts.splice(index, 1);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

//   reducers: {
//     addContact: {
//       reducer(state, { payload }) {
//         // console.log('payload: ', payload);
//         state.contacts.push(payload);
//       },
//       prepare(values) {
//         console.log('values: ', values);
//         return {
//           payload: {
//             name: values.name,
//             number: values.number,
//             id: nanoid(),
//           },
//         };
//       },
//     },

const contactsPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

export const persisteContactReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
