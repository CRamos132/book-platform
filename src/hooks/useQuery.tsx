import {useState, useEffect} from 'react'

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
    any[],
    'waiting' | 'complete' | 'error',
    (start: string) => void
] => {
    const [books, setBooks] = useState<Book[]>([]);
    const [status, setStatus] = useState<'waiting' | 'complete' | 'error'>('waiting')
    useEffect(()=>{
        setStatus('waiting')
        if(!query){
            setStatus('complete')
            return
        }
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=12`)
            .then(async response => {
                const data = await response.json()
                setBooks(data.items)
                setStatus('complete')
            })
            .catch(error => {
                console.log(error)
                setStatus('error')
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
    const loadMore = (start: string) => {
        const currentBooks = [...books]
        console.log('oi')
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${start}&maxResults=12`)
            .then(async response => {
                const data = await response.json()
                data.items.forEach((book: Book) => {
                    currentBooks.push(book)
                })
                setBooks(currentBooks)
                setStatus('complete')
            })
            .catch(error => {
                console.log(error)
                setStatus('error')
            })
    }
    return [books, status, loadMore];
};

export default useQuery