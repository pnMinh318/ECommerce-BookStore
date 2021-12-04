import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import AddToCartBtn from './AddToCartBtn'
//import RemoveFromCartBtn from './RemoveFromCartBtn'
function ItemCard({ item }) {
    return (
        
        <>
            <Card border="light"  className='my-2  m-0' style={{ opacity: '0.8' }}>
                <Link to={`products/${item._id}`}>
                    <Card.Img className='cartItem__img' style={{height:'160px'}} src={item.img} variant='top' ></Card.Img>
                </Link>
                {/* <div className='mr-auto'>
                    <Link to={`products/${item._id}`}>
                        {item.name}
                    </Link>
                </div> */}
                <Link to={`products/${item._id}`}>
                    <Card.Title as='div' variant='top' className='mr-auto pb-1' style={{ textAlign: 'left',minHeight:'50px' }}>
                        {item.name}</Card.Title>
                </Link>
                <Card.Text as='span' className='text-center text-danger' >
                    {item.price}đ
                </Card.Text>


                <AddToCartBtn product={item}></AddToCartBtn>
            </Card>
            
        </>
    )
}

export default ItemCard