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
import HomeHeader from '../components/molecules/HomeHeader/HomeHeader';
import ReviewCard from '../components/molecules/ReviewCard/ReviewCard';
import CurrentCard from '../components/organisms/CurrentCard/CurrentCard';

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
          <HomeHeader title='Discover new books' link='More' to='/' />
          <HorizontalScroll>
              <BookBanner />
              <BookBanner />
              <BookBanner />
          </HorizontalScroll>
          <HomeHeader title='Currently Reading' link='All' to='/' />
          <CurrentCard />
          <HomeHeader title='Reviews of The Days' link='All Video' to='/' />
          <ReviewCard />
        </TextContainer>
      }
      bottom={<NavMenu active='home' />}
    />
  );
}

export default Landing;
