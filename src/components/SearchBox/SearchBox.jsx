import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  const searchId = useId();

  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={e => onSearch(e.target.value)}
        className={css.searchInput}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}
      />
    </div>
  );
};

export default SearchBox;
