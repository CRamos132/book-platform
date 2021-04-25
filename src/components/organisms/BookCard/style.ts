import styled from 'styled-components'

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30%;
    color: rgba(49, 49, 49, 0.8);
`

const Title = styled.span`
    font-size: 0.7em;
    margin: 10px 0px 5px;
    width: 100%;
    text-align: left;
    font-weight: bold;
`

const Author = styled.span`
    font-size: 0.6em;
    width: 100%;
    text-align: left;
    font-weight: bold;
`

export {CardWrapper, Title, Author}