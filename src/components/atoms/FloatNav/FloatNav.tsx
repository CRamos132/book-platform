import styled from 'styled-components'

const FloatNav = styled.nav`
    position: fixed;
    bottom: 53px;
    left: 5vw;
    width: 90vw;
    background-color: ${props => props.theme.white};
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    min-height: 55px;
`

export default FloatNav;