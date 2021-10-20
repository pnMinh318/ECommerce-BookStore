import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import AddToCartBtn from './AddToCartBtn'
//import RemoveFromCartBtn from './RemoveFromCartBtn'
function ItemCard({ item }) {
    const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwRD7mVXOKlie72RYjOzt0RrhRZLehEMItlfZZx_SF_EAIMVNjjkSOlQcHBTat-bHD-g&usqp=CAU'
    return (
        // <div className='card'>
        //     <img className='card-product-img' src={src} alt={'book'}></img>
        //     <a className='card-product-description' ><b> {item.name} </b></a>
        //     <div className='card-product-price'>{`${item.price}$`}</div>
        //     <p className='card-product-description'>asdsajdnkajsdnkj</p>
        //     <AddToCartBtn item={item}></AddToCartBtn>
        //     {/* <RemoveFromCartBtn item={item}></RemoveFromCartBtn> */}
        // </div>
        <>
            <Card border="light" className='my-2 px-3' style={{ opacity: '0.8' }}>
                <Link to={`products/${item._id}`}>
                    <Card.Img src={src} variant='top'></Card.Img>
                </Link>
                {/* <div className='mr-auto'>
                    <Link to={`products/${item._id}`}>
                        {item.name}
                    </Link>
                </div> */}
                <Link to={`products/${item._id}`}>
                    <Card.Title as='div' variant='top' className='mr-auto' style={{textAlign:'left'}}>
                        {item.name}</Card.Title>
                </Link>
                <Card.Text as='div' >${item.price}</Card.Text>
                <AddToCartBtn product={item}></AddToCartBtn>
            </Card>
            {/* <Card border="light" style={{ width: 'auto', opacity: '0.8' }} fluid>
                <Link to={`products/${item._id}`}>
                    <Card.Img src={src} variant='top'></Card.Img>
                </Link>
                <Link to={`products/${item._id}`}>
                    <Card.Header>{item.name}</Card.Header>
                </Link>
                <Card.Body>

                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </>
    )
}

export default ItemCard