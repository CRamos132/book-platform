import styled from 'styled-components';

const VerticalWrapper = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    max-width: 700px;
    width: 90%;
    & > * {
        margin-bottom: 12px;
    }
`;

export default VerticalWrapper;
