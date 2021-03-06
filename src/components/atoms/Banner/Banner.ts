import styled from 'styled-components';

interface BannerProps {
    type: string;
}

const Banner = styled.article<BannerProps>`
    display: inline-block;
    position: relative;
    min-width: 272px;
    height: 139px;
    background: ${(props) => (props.type === '1' ? '#00173D' : '#451475')};
    box-shadow: 2px 4px 18px rgba(154, 175, 209, 0.62134);
    border-radius: 5px;
    z-index: 1;
    .wrapper {
        z-index: 1;
        width: 100%;
        height: 100%;
        padding: 15px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        h4 {
            max-width: 190px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    img {
        height: 111px;
        width: auto;
    }
`;

export default Banner;
