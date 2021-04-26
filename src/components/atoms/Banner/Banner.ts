import styled from 'styled-components'

const Banner = styled.article`
    display: inline-block;
    width: 272px;
    height: 139px;
    padding: 15px 20px;
    background: #00173D;
    box-shadow: 2px 4px 18px rgba(154, 175, 209, 0.62134);
    border-radius: 5px;
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img {
        height: 111px;
        width: auto;
    }
`

export default Banner