import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import getUrlParam from '../helpers/getUrlParam'
import BookCoverMd from '../components/atoms/BookCoverMd/BookCoverMd'
import Details from '../components/templates/Details/Details'

const Test = styled.div`
    z-index: -1;
    position: absolute;
    display: block;
    height: 282px;
    width: 100%;
    background-color: ${props => props.theme.bgColor};
    border-bottom-right-radius: 40%;
`

interface Book {
    id: string;
    volumeInfo: {
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        title: string;
        subtitle?: string;
    }
}

const BookDetails: React.FC = () => {
    const [book, setBook] = useState<Book>()
    useEffect(()=>{
        const id = getUrlParam('id')
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(async response => {
                const data = await response.json()
                console.log(data)
                setBook(data)
            })
    }, [])
    return (
        <>
            <Test />
            {book && (
                <Details
                    top={
                        <BookCoverMd 
                            src={book?.volumeInfo?.imageLinks?.smallThumbnail || 'https://via.placeholder.com/100x153'}
                        />
                    }
                    center={
                        <p>
                            {book?.volumeInfo.title}
                            {book.volumeInfo.subtitle && `: ${book.volumeInfo.subtitle}`}
                        </p>
                    }
                />
            )}
        </>
    )
}

export default BookDetails