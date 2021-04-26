import React from 'react'
import Banner from '../../atoms/Banner/Banner'
import BannerTypography from '../../atoms/BannerTypography/BannerTypography'
import ReadNow from '../../atoms/ReadNow/ReadNow'

const BookBanner: React.FC = () => {
    return (
        <Banner>
            <div className="wrapper">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <BannerTypography text='Hooked' />
                    <BannerTypography text='Nir Eyal' subHeader={true} />
                    <ReadNow />
                </div>
                <img src='https://via.placeholder.com/100x153' alt='Book cover' />
            </div>
        </Banner>
    )
}

export default BookBanner