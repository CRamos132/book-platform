import styled from 'styled-components'

const HorizontalScroll = styled.article`
    display: block;
    max-width: 100vw;
    min-height: 100px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 15px 0px 0px 20px;
    & > * {
        margin: 0px 10px 0px 0px;
    }
`

export default HorizontalScroll