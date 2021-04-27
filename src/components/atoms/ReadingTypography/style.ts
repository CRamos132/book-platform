import styled from 'styled-components';

const Header = styled.h3`
    font-family: PlayfairDisplay, serif;
    color: ${(props) => props.color};
    font-size: 1.1em;
`;

const SubHeader = styled.h4`
    color: #74776D;
    margin-top: 5px;
    font-size: 0.6em;
    font-family: Roboto, sans-serif;
    font-weight: normal;
`;

export { Header, SubHeader };
