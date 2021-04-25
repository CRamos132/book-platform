import styled from 'styled-components'

const Input = styled.input`
    background-color: ${props => props.theme.white};
    border-radius: 10px;
    font-size: 0.9em;
    color: black;
    padding: 15px;
    width: 90%;
    margin: auto;
    border: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${props => props.theme.gray};
    }
    :-ms-input-placeholder {
        color: ${props => props.theme.gray};
    }
`

export default Input