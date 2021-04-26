import styled from 'styled-components'

const FixedTop = styled.div`
    z-index: -1;
    position: absolute;
    display: block;
    height: 282px;
    width: 100%;
    background-color: ${props => props.theme.bgColor};
    border-bottom-right-radius: 40%;
`

export default FixedTop