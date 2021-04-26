import styled from 'styled-components'

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .top-left {
        position: absolute;
        top: 0px;
        right: 0px;
        height: 100px;
        width: 100px;
    }
    .bottom-mid {
        position: absolute;
        bottom: 0px;
        right: 89.11px;
        height: 48px;
        width: 48px;
        transform: rotate(180deg);
    }
    .left-blue {
        position: absolute;
        top: 115px;
        left: 74px;
        height: 63px;
        width: 63px;
    }
    .left-pink {
        position: absolute;
        top: 125px;
        left: 47px;
        height: 15px;
        width: 15px;
    }
    .top-corner {
        position: absolute;
        top: 86px;
        right: 103px;
        height: 24px;
        width: 24px;
    }
`

export default ImageWrapper