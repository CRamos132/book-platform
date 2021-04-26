import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import useDebounce from '../helpers/debounce'
import Input from '../components/atoms/Input/Input'
import Main from '../components/templates/Main/Main';
import NavMenu from '../components/molecules/NavMenu/NavMenu';
import HorizontalScroll from '../components/atoms/HorizontalScroll/HorizontalScroll';
import Header from '../components/atoms/Header/Header';
import TextContainer from '../components/atoms/TextContainer/TextContainer';
import BookBanner from '../components/organisms/BookBanner/BookBanner';

const Landing: React.FC = () => {
  const [value, setValue] = useState('')
  const history = useHistory()
  const handleQuery = (query: string) => {
    history.push(`/search?q=${query}`)
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
      body={
        <TextContainer>
          <Header>
            Hi, {''}
            <span className='colored'>
              Mehmed Al Fatih 👋
            </span>
          </Header>
          <HorizontalScroll>
              <BookBanner />
              <BookBanner />
              <BookBanner />
          </HorizontalScroll>
        </TextContainer>
      }
      bottom={<NavMenu active='home' />}
    />
  );
}

export default Landing;
