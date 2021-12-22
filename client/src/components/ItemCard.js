import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
function ItemCard({ item }) {
    const history = useHistory()
    const dispatch = useDispatch()
    return (

        <>
            <Card border="light" className='my-2  m-0' style={{ opacity: '0.8' }}>
                {
                    item.discount > 0 && (
                        <div className='text-center'
                            style={{
                                float: 'right', borderRadius: '5px', height: '20px', color: 'white',
                                backgroundColor: 'red', width: '50px', position: 'absolute'
                            }}
                        >{item.discount}%</div>)
                }

                <Link to={`products/${item._id}`} >
                    <Card.Img className='px-5 cartItem__img' src={item.img} variant='top' ></Card.Img>
                </Link>
                <Link to={`products/${item._id}`} className='text-decoration-none'>
                    <Card.Title as='div' variant='top' className='text-center mr-auto px-3'>
                        {item.name}</Card.Title>
                </Link>
                <Card.Text as='p' className='text-center m-0 card-product-price ' >
                    {item.price}đ
                    {
                        item.discount > 0 && 
                        (<small className='ml-3'
                            style={{ fontSize: '.7rem', color: 'grey',position:'absolute' }}>
                            <del>{item.price + item.price * item.discount / 100}đ</del>
                        </small>)
                    }

                </Card.Text>

                <div className='text-center'>
                    <button
                        className='w-25 py-1 card__button'
                        onClick={() => dispatch(addToCart(item))} disabled={item.stock === 0}
                        style={{ borderRight: '1px solid black' }}>
                        +</button>
                    <button
                        className='w-25 py-1 card__button'
                        onClick={() => history.push(`/products/${item._id}`)}
                    > Xem </button>
                </div>
            </Card>

        </>
    )
}

export default ItemCard