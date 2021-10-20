import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetails } from '../redux/actions/productActions'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'

import AddToCartBtn from '../components/AddToCartBtn'
import Spinners from '../components/Spinners'
//import Slides from '../components/Slides'


function ProductDetails({ match }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productDetails(match.params.id))
    }, [dispatch])
    const { loading, product, error } = useSelector(state => state.productDetails) // chọn slice

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
    return (
        <>
            {
                loading ?
                    <Spinners></Spinners> :
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
                                <ListGroup.Item as='h5' style={{ textAlign: 'center' }}>
                                    PRODUCT DETAILS
                                </ListGroup.Item>
                                <ListGroup.Item as='h5'>
                                    NAME: {product.name}
                                </ListGroup.Item>
                                <ListGroup.Item as='h4' variant='light'>
                                    <div>PRICE: {product.price}$ </div>
                                </ListGroup.Item>
                                <ListGroup.Item as='h4' variant='light'>
                                    {product.category}
                                </ListGroup.Item>
                                <ListGroup.Item as='h6' variant='dark' style={{ height: 150 }}>
                                    {product.description}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {/* chưa xử lí instock & out of stock */}
                                    <Row>
                                        <Col>
                                            <b style={{ color: 'red',fontSize:'15px' }}> IN STOCK </b>
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
