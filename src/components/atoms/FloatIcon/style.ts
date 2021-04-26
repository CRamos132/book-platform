import styled from 'styled-components'

const IconWrapper = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #3F4043;
    border: none;
    background-color: transparent;
`

const Icon = styled.img`
    height: 16px;
    width: 16px;
    margin-right: 10px;
    opacity: 0.3;
`

const Label = styled.label`
    font-size: 0.8em;
    text-decoration:none;
    text-transform: capitalize;
`

export {Icon, IconWrapper, Label}