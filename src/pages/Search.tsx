import React, {useEffect, useState} from 'react'
import Input from '../components/atoms/Input/Input';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import Main from '../components/templates/Main/Main';
import getUrlParam from '../helpers/getUrlParam';

const Search: React.FC = () => {
    const [query, setQuery] = useState('')
    useEffect(()=>{
        const newQuery = getUrlParam('q')
        setQuery(newQuery || '')
    }, [])
    return (
        <Main 
        top={<Input type='search' name='quey' placeholder='Search' />}
        body={<div style={{height: '50px', width: '300px', display: 'inline-block'}}>{query}</div>}
        bottom={<NavMenu active='home' />}
        />
    )
}

export default Search