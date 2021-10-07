import React from 'react'
import ico_flashsale from './ico_flashsale.png'
function Banner() {
    return (
        <div className='header-banner'>
            <div className='banner-boxes'>
                <img src={ico_flashsale} alt='Flash sale' className='banner-icons'></img>
                <span> Flash sale</span>
            </div>
            <div className='banner-boxes'>
                <img src={ico_flashsale} alt='Flash sale' className='banner-icons'></img>
                <span> Flash sale</span>
            </div>
            <div className='banner-boxes'>
                <img src={ico_flashsale} alt='Flash sale' className='banner-icons'></img>
                <span> Flash sale</span>
            </div>
            <div className='banner-boxes'>
                <img src={ico_flashsale} alt='Flash sale' className='banner-icons'></img>
                <span> Flash sale</span>
            </div>
            <div className='banner-boxes'>
                <img src={ico_flashsale} alt='Flash sale' className='banner-icons'></img>
                <span> Flash sale</span>
            </div>
            
        </div>
    )
}

export default Banner
