import React from 'react'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'
import BC from '../assets/BC.jpg' //toa2n bo hinh deu 310x210
import DC from '../assets/DC.png'
import MOMO from '../assets/MOMO.jpg'
import Moca from '../assets/Moca.png'
import ItemCards from '../components/ItemCards';

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
    const items = [
        { _id: 1, name: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110 },
        { _id: 2, name: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80 },
        { _id: 3, name: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120 },
        { _id: 4, name: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260 },
        { _id: 5, name: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160 },
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
            <div className='category-noibat' style={{ backgroundColor: '#FAFAFA', height: 350, marginTop: 10 }}>
                <p style={{ textAlign: 'center', fontWeight: 600, margin: 0, backgroundColor: '#94baf3', borderRadius: 3, paddingTop: 10, paddingBottom: 10 }}>SAN PHAM NOI BAT</p>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-evenly', boxSizing: 'border-box' }}>
                    <ItemCards items={items}></ItemCards>
                </div>
            </div>
        </div>
    )
}

export default MainMenu
