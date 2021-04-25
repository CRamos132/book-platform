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
    'waiting' | 'complete' | 'error' | 'empty',
    (start: string) => void
] => {
    const [books, setBooks] = useState<Book[]>([]);
    const [limit, setLimit] = useState<number>()
    const [status, setStatus] = useState<'waiting' | 'complete' | 'error' | 'empty'>('waiting')
    useEffect(()=>{
        setStatus('waiting')
        if(!query){
            setStatus('complete')
            return
        }
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=12`)
            .then(async response => {
                const data = await response.json()
                if(data.totalItems === 0){
                    setStatus('empty')
                } else {
                    setLimit(data.totalItems)
                    setBooks(data.items)
                    setStatus('complete')
                }
            })
            .catch(error => {
                console.log(error)
                setStatus('error')
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
    const loadMore = (start: string) => {
        const currentBooks = [...books]
        if(limit && Number(start) > limit){
            // make button to load more disapear
            return
        }
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