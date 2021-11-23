import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import AddToCartBtn from './AddToCartBtn'
//import RemoveFromCartBtn from './RemoveFromCartBtn'
function ItemCard({ item }) {
    const src = 'https://img.freepik.com/free-psd/book-cover-mockup_125540-572.jpg?size=626&ext=jpg'
    return (
        
        <>
            <Card border="light" className='my-2  m-0' style={{ opacity: '0.8' }}>
                <Link to={`products/${item._id}`}>
                    <Card.Img src={src} variant='top'></Card.Img>
                </Link>
                {/* <div className='mr-auto'>
                    <Link to={`products/${item._id}`}>
                        {item.name}
                    </Link>
                </div> */}
                <Link to={`products/${item._id}`}>
                    <Card.Title as='div' variant='top' className='mr-auto pb-1' style={{ textAlign: 'left' }}>
                        {item.name}</Card.Title>
                </Link>
                <Card.Text as='span' className='text-center' >
                    ${item.price}
                </Card.Text>


                <AddToCartBtn product={item}></AddToCartBtn>
            </Card>
            
        </>
    )
}

export default ItemCard