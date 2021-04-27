/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDebounce from '../helpers/debounce';
import Input from '../components/atoms/Input/Input';
import Main from '../components/templates/Main/Main';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import HorizontalScroll from '../components/atoms/HorizontalScroll/HorizontalScroll';
import Header from '../components/atoms/Header/Header';
import TextContainer from '../components/atoms/TextContainer/TextContainer';
import BookBanner from '../components/organisms/BookBanner/BookBanner';
import HomeHeader from '../components/molecules/HomeHeader/HomeHeader';
import ReviewCard from '../components/molecules/ReviewCard/ReviewCard';
import CurrentCard from '../components/organisms/CurrentCard/CurrentCard';
import { Book } from '../types';

const book1: Book = {
  id: 'dsz5AwAAQBAJ',
  volumeInfo: {
    authors: ['Nir Eyal'],
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/publisher/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73Std2aCICLOw-EBuZG8repRo5DTg0LXYdqCHbOc5MPqs7NUOZCPSP4bDLRbotr2nLu4DznNrT4sNZXeIpLJZKgueI56jSbN9cZj5LjZbrkHQdU4bGUYbYyCTVHsG9CxhsC_ERr&source=gbs_api',
      thumbnail: 'http://books.google.com/books/publisher/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70JNJgkukGPnaTnaNNJsuSOjCQI7Xhw__QCCY9AKs9YAcBepBMR6ZI4uDR_erRuRMfK3Rzm6L8BrT0JLRznwvg3lUnTdxXeS_BO2IcjpG-gSeJ8tu7RCdFc1J_U_9QjuQN_Nmz7&source=gbs_api',
    },
    title: 'Hooked',
  },
};
const book2: Book = {
  id: 'rB2ZDQAAQBAJ',
  volumeInfo: {
    authors: ['Gary Keller', 'Jay Papasan', 'Gary Keller'],
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/publisher/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE727qA2jmtMlx1ux02YqlpoARfkjxgF8KtMQBd5TRWI4rGq4WABjqNo5rL_t1rAnUZypCNgg1rWTRvLfLE6wA7irHP_liok_avil_6lnfRqh9HWNtCEAcGfvmCEzYS8RWEKZr5RK&source=gbs_api',
      thumbnail: 'http://books.google.com/books/publisher/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7276yeo3cE2ALA9kxw8jb4x4Y0adUkm8r2YDOo1-gXhgQ60K7fUZaI-eGOhbgXJJMRgk0gMK1xQtFo4H578zY9rHl9as-oPN1aTBE6lY78q_5voDkPcEQUYQ5Ld7QrgUyBNUigg&source=gbs_api',
    },
    title: 'The ONE Thing',
  },
};
const book3: Book = {
  id: 'eLRhDgAAQBAJ',
  volumeInfo: {
    authors: ['Adam Grant'],
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/publisher/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73oUwTzaJH2xUVTb_PPR-4Fu4GHh9ySWjcEZpd_hrCX_kDaKSXaH9qKKqZNjTlcY1nrdTArKabREQIOjI_ea72t8Geyfm1jQTwhyE3A5Dgppt1ngzhsDrmUMIgmhEGZBiHqNLGv&source=gbs_api',
      thumbnail: 'http://books.google.com/books/publisher/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72PDU2Kx4BMknQKg3Qw3G-L8O13rLZMYxnZ_QPeVPuXNpaJlcdfYuCU-7VfQKZKfPhWpI9-LdZSd0FVMCLoz37a2En7eo__d5MzeCTrrYli56UxbWiYAoGqjiDtzyykeeh_ceTJ&source=gbs_api',
    },
    title: 'Originais',
  },
};
const bookArray = [book1, book2, book3];

const Landing: React.FC = () => {
  const [qValue, setValue] = useState('');
  const history = useHistory();
  const handleQuery = (query: string): void => {
    history.push(`/search?q=${query}`);
  };
  const debouncedAction = useDebounce(handleQuery, 500);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setValue(value);
    debouncedAction(value);
  };

  return (
    <Main
      top={(
        <Input
          type="search"
          onChange={handleChange}
          value={qValue}
          name="query"
          placeholder="Search"
        />
    )}
      body={(
        <TextContainer>
          <Header>
            Hi,
            {' '}

            <span className="colored">
              Mehmed Al Fatih 👋
            </span>
          </Header>
          <HomeHeader title="Discover new books" link="More" to="/" />
          <HorizontalScroll id="main-books">
            {bookArray.map(((book, index) => {
              const type = index % 2 ? '2' : '1';
              return (
                <BookBanner
                  id={`main-book-${index}`}
                  key={`book_banner${book.id}`}
                  type={type}
                  book={book}
                />
              );
            }))}
          </HorizontalScroll>
          <HomeHeader title="Currently Reading" link="All" to="/" />
          <CurrentCard id="currently-reading" book={book3} />
          <HomeHeader title="Reviews of The Days" link="All Video" to="/" />
          <ReviewCard />
        </TextContainer>
      )}
      bottom={<NavMenu active="home" />}
    />
  );
};

export default Landing;
