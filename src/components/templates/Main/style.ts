import styled from 'styled-components'

const MainWrapper = styled.div`
    position: relative;
    width: 100vw;
    min-height: 99vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        top: 50px;
    }
    .body {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 128px;
    }
`

export {MainWrapper}