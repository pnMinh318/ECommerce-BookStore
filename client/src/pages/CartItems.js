import React from 'react'
// import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { updateItemQuantity, removeFromCart } from '../redux/actions/cartActions'
import { useHistory } from 'react-router-dom'
function CartItems() {

    const dispatch = useDispatch()
    const history = useHistory()

    const { products, totalPrice } = useSelector(state => state.cart)


    const handleChangeQuantity = (id, e) => {
        const newQuantity = e.target.value
        dispatch(updateItemQuantity({ id, newQuantity })) //update cart quantity
    }

    const handleRemoveFromCart = (id, e) => {
        dispatch(removeFromCart(id))
    }

    const handleCheckout = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <>
            <Row className='my-3' as='div'> {/* row cart items*/}
                <Col xs={12}>
                    {products.length === 0 ?
                        <div style={{ textAlign: 'center', padding: '20% 0px', backgroundColor: '#caddee8c' }}>
                            <h3>nothing in your cart</h3>
                            <Link to='/products'><span >click here to go back</span></Link>
                        </div> :
                        <ListGroup>
                            {products.map(product => {
                                return (
                                    <ListGroup.Item variant='light' key={product._id}  >
                                        <Row className='my-3'>
                                            <Col md={2}>
                                                <Image thumbnail
                                                    src='https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                                                    fluid
                                                    alt={product.name}>
                                                </Image>
                                            </Col >
                                            <Col md={4}>
                                                <Link to={`/products/${product._id}`}>
                                                    <div className='ml-3 mt-4 text-center text-danger'> {product.name.toUpperCase()}</div>
                                                </Link>
                                            </Col>
                                            <Col md={2}>
                                                <div className='mt-4 text-center text-info'> {product.price}$</div>
                                            </Col>
                                            <Col md={4}>
                                                <div className='mt-4 mx-2'>
                                                    <select name='quantity' value={product.cartQuantity} className='w-50 h-75'
                                                        onChange={(e) => handleChangeQuantity(product._id, e)}>
                                                        {
                                                            product.stock <= 5 ?
                                                                [...Array(product.stock).keys()].map(index => {
                                                                    return (
                                                                        <option value={index + 1} key={index + 1}>{index + 1}</option> // lấy key thì ta đc array [0,1,...stock-1]
                                                                    )
                                                                })
                                                                : [1, 2, 3, 4, 5].map(index => {
                                                                    return (
                                                                        <option value={index} key={index}>{index}</option>
                                                                    )
                                                                })
                                                        }
                                                    </select>
                                                    <button className='ml-5 btn-danger border-0' onClick={(e) => handleRemoveFromCart(product._id, e)}>&times; </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            })
                            }
                        </ListGroup>
                    }
                </Col>
            </Row>
            <Row>
                <Col xs={4} as='div' className='ml-auto'> {/* chưa xong */}{/* cart  */}
                    {/* <div style={{ border: '0.5px solid #ff00001f', borderRadius: '20px', background: 'whitesmoke' }}> */}
                    <div>
                        <div className=''>
                            <div className='mt-4' style={{ borderTop: '2px solid #6e52e0' }} >
                                <div className='pt-4 text-uppercase'>
                                    <div className='mr-3'>Number of items:
                                        <span className='float-right'>
                                            {
                                                products.reduce((acc, product) => acc + Number(product.cartQuantity), 0)
                                            }
                                        </span>
                                    </div>
                                    <div className='mr-3'>Total cost:
                                        <span className='float-right'>{totalPrice}$</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3' >
                                <button className='w-100 p-2 mb-4' onClick={() => handleCheckout()}
                                    style={{ border: '1px solid #000', backgroundColor: '#000', color: '#fff' }} >CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                    {/* <Card className=' w-100' translate='translateY(0)' >
                    
                    <Card.Header className='text-center text-uppercase'>your cart</Card.Header>
                    <Card.Body>
                        <Card.Title className=''> Tổng tiền: $$$ </Card.Title>  
                        <Card.Text>
                        sub total: tổng số items
                        </Card.Text>
                    </Card.Body>
                </Card> */}
                </Col>

            </Row>
        </>
    )
}

export default CartItems


