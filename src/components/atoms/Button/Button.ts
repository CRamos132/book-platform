import styled from 'styled-components';

const Button = styled.button`
    display: block;
    width: 100%;
    max-width: 700px;
    border-radius: 10px;
    border: none;
    padding: 10px 0;
    background-color: ${(props) => props.theme.contrast};
    color: white;
    text-align: center;
    font-size: 1.3em;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }
`;

export default Button;
