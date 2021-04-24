import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import useDebounce from '../helpers/debounce'
import Input from '../components/atoms/Input/Input'
import BottomNav from '../components/atoms/BottomNav/BottomNav';
import Main from '../components/templates/Main/Main';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import HorizontalScroll from '../components/atoms/HorizontalScroll/HorizontalScroll';

const Landing: React.FC = () => {
  const [value, setValue] = useState('')
  const history = useHistory()
  const handleQuery = (query: string) => {
    history.push(`/search?q=${query}`)
    // fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=10`)
    //   .then(response => console.log(response))
  }
  const debouncedAction = useDebounce(handleQuery, 500)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setValue(value)
    debouncedAction(value)
  }
  
  return (
    <Main 
      top={<Input type='search' onChange={handleChange} value={value} name='quey' placeholder='Search' />}
      body={<HorizontalScroll>
          <div style={{height: '50px', width: '300px', display: 'inline-block'}}>Oi</div>
          <div style={{height: '50px', width: '300px', display: 'inline-block'}}>Oi</div>
          <div style={{height: '50px', width: '300px', display: 'inline-block'}}>Oi</div>
          <div style={{height: '50px', width: '300px', display: 'inline-block'}}>Oi</div>
      </HorizontalScroll>}
      bottom={<NavMenu active='home' />}
    />
  );
}

export default Landing;
