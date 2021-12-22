import React from 'react'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'
import BC from '../assets/BC.jpg' //toa2n bo hinh deu 310x210
import DC from '../assets/DC.png'
import MOMO from '../assets/MOMO.jpg'
import Moca from '../assets/Moca.png'
// import ItemCards from '../components/ItemCards';

function MainMenu() {
    const imgsData = [
        {
            key: 1,
            src: 'https://toidicodedao.files.wordpress.com/2019/12/photo-1544716278-e513176f20b5-e1577168352807.jpeg?w=672&h=372&crop=1',
            alt: 'book2'
        },
        {
            key: 2,
            src: 'https://cdn0.fahasa.com/media/magentothem/banner7/manga_comic_920_x_420.png',
            alt: 'book3'
        },
        {
            key: 3,
            src: 'https://coolwallpapers.me/picsup/5253841-pillow-bookstore-reading-place-cosy-window-light-room-read-chill-cool-book-educate-knowledge-window-morning-relax-reading-explore-free-pictures.jpg',
            alt: 'book4'
        }
    ]
    
    return (
        <div className='app-home-container'>
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
            
        </div>
    )
}

export default MainMenu
