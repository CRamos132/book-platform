import styled from 'styled-components'

const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
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
        width: 100%;
        margin-top: 128px;
    }
`

export {MainWrapper}