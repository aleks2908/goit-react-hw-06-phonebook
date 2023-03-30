import storage from 'redux-persist/lib/storage';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },

  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare({ values }) {
        return {
          payload: {
            name: values.name,
            number: values.number,
            id: nanoid(),
          },
        };
      },
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
