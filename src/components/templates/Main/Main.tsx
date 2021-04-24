import React from 'react'
import {MainWrapper} from './style'

interface MainProps {
    top?: React.ReactElement;
    body?: React.ReactElement;
    bottom?: React.ReactElement;
}

const Main: React.FC<MainProps> = ({top, body, bottom}) => {
    return (
        <MainWrapper>
            <section className='top'>
                {top}
            </section>
            <section className="body">
                {body}
            </section>
            {bottom}
        </MainWrapper>
    )
}

export default Main