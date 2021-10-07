import React from 'react'
import Navbar from './Navbar'
import Slides from './Slides'
import BC from '../assets/BC.jpg' //toa2n bo hinh deu 310x210
import DC from '../assets/DC.png'
import MOMO from '../assets/MOMO.jpg'
import Moca from '../assets/Moca.png'
function MainMenu() {
    const imgsData = [
        {
            src: 'https://toidicodedao.files.wordpress.com/2019/12/photo-1544716278-e513176f20b5-e1577168352807.jpeg?w=672&h=372&crop=1',
            alt: 'book2'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWHcisLKBlDvBEI2iYI5XEWXoiZOQQkOa5Q&usqp=CAU',
            alt: 'book3'
        }
    ]
    return (
        <>
            <div className='app-main-menu'>
                <Navbar></Navbar>
                <div className='app-main-slider' style={{ alignContent: 'center' }}>
                    <Slides imgsData={imgsData}></Slides>
                </div>
            </div>
            <div className='app-home-banner' >
                <div className='app-home-banner-img'>
                    <img src={BC} alt='banner'></img>
                </div>
                <div className='app-home-banner-img'>
                    <img src={DC} alt='banner'></img>
                </div>
                <div className='app-home-banner-img'>
                    <img src={MOMO} alt='banner'></img>
                </div>
                <div className='app-home-banner-img'>
                    <img src={Moca} alt='banner'></img>
                </div>
            </div>
        </>
    )
}

export default MainMenu
