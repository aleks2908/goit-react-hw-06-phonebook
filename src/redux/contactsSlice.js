import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
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
      return state.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
