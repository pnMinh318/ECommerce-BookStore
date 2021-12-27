import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
function Slides({ imgsData }) {

    const history = useHistory()
    return (
        <>
            <Carousel pause='hover' className='w-100 bg-dark ' >
                {imgsData.map((img, index) => {
                    return (
                        <Carousel.Item
                            interval={5000} key={index}
                            onClick={() => history.push('/products')}>
                            <Image
                                style={{ cursor: 'pointer' }}
                                className="d-block"
                                src={img.src}
                                alt={img.alt}
                            />
                            <Carousel.Caption>
                                {/* <h2>First slide label</h2>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )

}

export default Slides
