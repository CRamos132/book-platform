import React, { useEffect, useState } from 'react';
import Input from '../components/atoms/Input/Input';
import BookList from '../components/molecules/BookList/BookList';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import Main from '../components/templates/Main/Main';
import useDebounce from '../helpers/debounce';
import getUrlParam from '../helpers/getUrlParam';
import useQuery from '../hooks/useQuery';

const Search: React.FC = () => {
  const [displayQuery, setDisplayQuery] = useState('');
  const [query, setQuery] = useState('');
  const [books, status, loadMore] = useQuery(query);
  const debouncedAction = useDebounce(setQuery, 500);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setDisplayQuery(value);
    debouncedAction(value);
  };
  useEffect(() => {
    const newQuery = getUrlParam('q');
    const search = newQuery || '';
    setDisplayQuery(search);
    setQuery(search);
  }, []);
  return (
    <Main
      top={(
        <Input
          type="search"
          name="query"
          value={displayQuery}
          onChange={handleChange}
          placeholder="Search"
        />
)}
      body={<BookList books={books} status={status} loadMore={loadMore} />}
      bottom={<NavMenu active="home" />}
    />
  );
};

export default Search;
