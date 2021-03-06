import styled from 'styled-components';

const BottomNav = styled.nav`
    position: fixed;
    bottom: 0;
    height: 8vh;
    min-height: 60px;
    width: 100%;
    background-color: ${(props) => props.theme.white};
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export default BottomNav;
