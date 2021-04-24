import React, {useEffect, useState} from 'react'
import Input from '../components/atoms/Input/Input';
import BookList from '../components/molecules/BookList/BookList';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import Main from '../components/templates/Main/Main';
import useDebounce from '../helpers/debounce';
import getBooks from '../helpers/getBooks';
import getUrlParam from '../helpers/getUrlParam';

const Search: React.FC = () => {
    const [displayQuery, setDisplayQuery] = useState('')
    const [books, setBooks] = useState<any>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setDisplayQuery(value)
        debouncedAction(value)
    }
    const handleQuery = (search: string) => {
        if(!search){
            return
        }
        setBooks([])
        getBooks(search).then(async response => {
            const data = await response.json()
            console.log(data)
            setBooks(data.items)
        })
    }
    const debouncedAction = useDebounce(handleQuery, 500)
    useEffect(()=>{
        const newQuery = getUrlParam('q')
        const search = newQuery || ''
        setDisplayQuery(search)
        getBooks(search).then(async response => {
            const data = await response.json()
            console.log(data)
            setBooks(data.items)
        })
    }, [])
    return (
        <Main 
            top={<Input type='search' name='quey' value={displayQuery} onChange={handleChange} placeholder='Search' />}
            body={<BookList books={books} />}
            bottom={<NavMenu active='home' />}
        />
    )
}

export default Search