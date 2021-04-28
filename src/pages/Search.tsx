import React, { useEffect, useState } from 'react';
import BookList from '../components/molecules/BookList/BookList';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import SearchInput from '../components/molecules/SearchInput/SearchInput';
import Main from '../components/templates/Main/Main';
import useDebounce from '../helpers/debounce';
import getUrlParam from '../helpers/getUrlParam';
import useQuery from '../hooks/useQuery';

const Search: React.FC = () => {
  const [displayQuery, setDisplayQuery] = useState('');
  const [query, setQuery] = useState('');
  const [books, status, loadMore] = useQuery(query);
  const [count, setCount] = useState(0);
  const debouncedAction = useDebounce(setQuery, 500);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setDisplayQuery(value);
    setCount(0);
    debouncedAction(value);
  };
  const handleLoad = (): void => {
    const newCount = count + 12;
    loadMore(String(newCount));
    setCount(newCount);
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
        <SearchInput
          type="search"
          name="query"
          value={displayQuery}
          onChange={handleChange}
          placeholder="Search"
        />
)}
      body={<BookList books={books} status={status} loadMore={handleLoad} />}
      bottom={<NavMenu active="home" />}
    />
  );
};

export default Search;
