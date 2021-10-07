import React from 'react'
import { useState, useEffect } from 'react'
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc'

function Slides({imgsData}) {
    // const imgsData = [
    //     {
    //         src: 'https://toidicodedao.files.wordpress.com/2019/12/photo-1544716278-e513176f20b5-e1577168352807.jpeg?w=672&h=372&crop=1',
    //         alt: 'book2'
    //     },
    //     {
    //         src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWHcisLKBlDvBEI2iYI5XEWXoiZOQQkOa5Q&usqp=CAU',
    //         alt: 'book3'
    //     }
    // ]
    const [current, setCurrent] = useState(0)
    const nextSlide = () => {
        setCurrent(() => {
            return current !== imgsData.length - 1 ? (current + 1) : 0
        })
    }
    const prevSlide = () => {
        setCurrent(() => {
            return current === 0 ? imgsData.length - 1 : (current - 1)
        })
    }
    useEffect(() => {
        const timer = setTimeout(() => nextSlide(), 5000);
        return () => clearTimeout(timer);
    }, [current]);
    return (
        <>

            <VscTriangleLeft className='arrow' onClick={prevSlide} ></VscTriangleLeft>
            {imgsData.map((img, index) => {
                return (
                    <>
                        {index === current &&
                            (<img src={img.src} alt={img.alt} className='slider-img' key={img.alt}>
                            </img>)}
                    </>
                )
            })}
            <VscTriangleRight className='arrow' onClick={nextSlide}></VscTriangleRight>
        </>
    )

}

export default Slides
