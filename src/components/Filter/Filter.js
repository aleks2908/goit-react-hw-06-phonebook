import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name <br />
      <input
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={changeFieldFilter}
      />
    </label>
  );
};
