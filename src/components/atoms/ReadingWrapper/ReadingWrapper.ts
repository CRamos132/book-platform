import styled from 'styled-components'

const ReadingWrapper = styled.article`
    position: relative;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    .book-cover {
        margin-left: 20px;
        margin-right: 10px;
        height: 130px;
        width: auto;
    }
    .content {
        padding: 25px 0;
        height: 100%;
    }
`

export default ReadingWrapper