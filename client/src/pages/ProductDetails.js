import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetails } from '../redux/actions/productActions'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'

import AddToCartBtn from '../components/AddToCartBtn'
import Spinners from '../components/Spinners'
import Message from '../components/Message'
//import Slides from '../components/Slides'


function ProductDetails({ match }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productDetails(match.params.id))
    }, [dispatch, match.params.id])
    const { loading, product, error } = useSelector(state => state.productDetails) // chọn slice

    return (
        <>
            {
                loading ?
                    <Spinners></Spinners> :
                    error ?
                        <div style={{ textAlign: 'center', margin: '20% 0px' }}>
                            <Message variant='danger' msg={'Sorry some thing went wrong'}>   </Message>
                        </div> :
                        <Row className='mb-auto' style={{ height: 600 }}>
                            <Col md={8} xs={8}>
                                {/* <div style={{ height: 400, display: 'flex' }} >                 bỏ cái slides
                                <Slides imgsData={imgsData} fluid='true' ></Slides>

                            </div> */}
                                <Image src='https://surfaceviet.vn/wp-content/uploads/2020/05/surface-book-3-tai-tphcm.jpg'
                                    fluid='true' style={{ margin: 'auto' }}>

                                </Image>
                            </Col>
                            <Col md={4} xs={4} className='ml-auto'>
                                <ListGroup className='pl-4' variant='flush'>
                                    <ListGroup.Item as='h5' className='text-center'>
                                        PRODUCT DETAILS
                                    </ListGroup.Item>
                                    <ListGroup.Item as='h4'>
                                        NAME: {product.name}
                                    </ListGroup.Item>
                                    <ListGroup.Item as='h5' variant='light'>
                                        <div>PRICE: {product.price}$ </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as='h5' variant='light'>
                                        CATEGORY: {product.category}
                                    </ListGroup.Item>
                                    <ListGroup.Item as='h6' variant='dark' style={{ height: 150 }}>
                                        {product.description}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {/* chưa xử lí instock & out of stock */}
                                        <Row>
                                            <Col>
                                                {
                                                    product.stock > 0 ?
                                                        <b style={{ color: 'red', fontSize: '15px' }}> IN STOCK </b>:
                                                        <b style={{ color: 'red', fontSize: '15px',textDecoration:'line-through' }}> IN STOCK </b>
                                            }
                                            </Col>
                                            <Col>
                                                <span className='ml-5' style={{ boxSizing: 'content-box' }}>
                                                    <AddToCartBtn product={product} ></AddToCartBtn>
                                                </span>
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                </ListGroup>
                                {/* <ListGroup variant='flush'>
                    <ListGroup.Item as='h4'>
                        {product.name}

                    </ListGroup.Item>
                    <ListGroup.Item as='h4'>
                        {product.price}
                    </ListGroup.Item>
                </ListGroup> */}
                            </Col>
                        </Row>

            }
        </>

    )
}

export default ProductDetails
