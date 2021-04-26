import React from 'react'
import ReactHtmlParser from 'react-html-parser'; 
import Header from '../../atoms/Header/Header'
import SubHeader from '../../atoms/SubHeader/SubHeader'
import TextBody from '../../atoms/TextBody/TextBody'
import TextContainer from '../../atoms/TextContainer/TextContainer'

interface BookTextProps {
    title: string;
    subtitle?: string;
    authors: string[];
    description: string;
}

const BookText: React.FC<BookTextProps> = ({title, subtitle, authors, description}) => {
    return (
        <TextContainer>
            <Header weight='bold'>
                {title}
                {subtitle && (
                    <span className='sub'>: {subtitle}</span>
                )}
            </Header>
            <SubHeader>
                {authors?.map((author, index) => 
                    index === authors.length - 1 ? `${author}` : `${author}, `
                )}
            </SubHeader>
            <TextBody>
                {ReactHtmlParser(description)}
            </TextBody>
        </TextContainer>
    )
}

export default BookText