import { useDispatch, useSelector } from 'react-redux';
import {DebounceInput} from 'react-debounce-input';
import { setFilterContact } from '../../store/Filter.slice';
import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const onFilterChange = name => {
    dispatch(setFilterContact(name));
  };
  return (
    <section className={css.container_filter}>
      <label className={css.filter_label}>
        Find contact by name
        <DebounceInput
        className={css.filter_input}
          minLength={1}
          debounceTimeout={1000}
          onChange={e => onFilterChange(e.target.value)}
          value={filter}
          type="text"
        />
      </label>
    </section>
  );
};
