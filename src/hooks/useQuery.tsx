import { useState, useEffect } from 'react';

interface Book {
    volumeInfo: {
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        title: string;
    }
}

const useQuery = (query: string): [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any[],
    'waiting' | 'complete' | 'error' | 'empty',
    (start: string) => void
] => {
  const [books, setBooks] = useState<Book[]>([]);
  const [limit, setLimit] = useState<number>();
  const [status, setStatus] = useState<
  'waiting' | 'complete' | 'error' | 'empty'
  >('waiting');
  useEffect(() => {
    setStatus('waiting');
    if (!query) {
      setStatus('complete');
      return;
    }
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=12`,
    )
      .then(async (response) => {
        const data = await response.json();
        if (response.status !== 200) {
          setStatus('error');
          return;
        }
        if (data.totalItems === 0 || !data.totalItems) {
          setStatus('empty');
        } else {
          setLimit(data.totalItems);
          setBooks(data.items);
          setStatus('complete');
        }
      })
      .catch(() => {
        // console.log(error);
        setStatus('error');
      });
  }, [query]);
  const loadMore = (start: string): void => {
    const currentBooks = [...books];
    if (limit && Number(start) > limit) {
      // make button to load more disapear
      return;
    }
    fetch(
      // eslint-disable-next-line max-len
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${start}&maxResults=12`,
    )
      .then(async (response) => {
        const data = await response.json();
        data.items.forEach((book: Book) => {
          currentBooks.push(book);
        });
        setBooks(currentBooks);
        setStatus('complete');
      })
      .catch(() => {
        // console.log(error);
        setStatus('error');
      });
  };
  return [books, status, loadMore];
};

export default useQuery;
