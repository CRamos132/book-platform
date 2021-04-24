import styled from 'styled-components'

const MainWrapper = styled.div`
    position: relative;
    width: 100vw;
    min-height: 99vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 50px;
    }
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
`

export {MainWrapper}