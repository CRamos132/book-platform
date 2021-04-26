import styled from 'styled-components'

interface HeaderProps {
    weight?: string;
}

const Header = styled.h1<HeaderProps>`
    font-size: 1.3em;
    font-weight: ${props => props.weight === 'bold' ? 'bold' : 600};
    width: 100%;
    text-align: left;
    color: rgba(54, 56, 58, 1);
    .sub {
        font-weight: 400;
    }
    .colored {
        color: ${props => props.theme.contrast};
    }
`

export default Header