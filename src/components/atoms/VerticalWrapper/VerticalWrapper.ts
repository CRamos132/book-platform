import styled from 'styled-components'

const VerticalWrapper = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    & > * {
        margin-bottom: 12px;
    }
`

export default VerticalWrapper