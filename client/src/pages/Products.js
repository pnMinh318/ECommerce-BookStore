import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import { Row, Col } from 'react-bootstrap'

import ItemCard from '../components/ItemCard'
import Spinners from '../components/Spinners'
import Message from '../components/Message'

function Products() {

    const dispatch = useDispatch()

    useEffect(() => {   // dispatch 1 cái hàm listProducts action xuống reducer và xử lý bỏ vào store
        dispatch(listProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList) //chọn slice

    const { loading, products, error } = productList

    //xl: số item
    return (
        <>
            {
                loading ?
                    <Spinners></Spinners> :
                    error ?
                        <div style={{ textAlign: 'center', margin: '20% 0px' }}>
                            <Message variant='danger' msg={'Sorry some thing went wrong'}>   </Message>
                        </div> :
                        <Row>
                            <Col xs={3} className='my-2' style={{
                                height: 'fit-content', borderRadius: '15px',
                                backgroundColor: '#cac7cf1f'
                            }}> {/* ,border: '0.5px solid #00000047', boxShadow: '3px 1px 10px #c0bffe' */}
                                <div className='ml-1 mt-4'>
                                    <strong style={{ fontWeight: '500px' }}>THỂ LOẠI</strong>

                                </div>
                                <Row className='my-2 mx-1'>
                                    <Col xs={12} md={9} >
                                        <div> Khoa học-Kỹ thuật </div>
                                    </Col>
                                    <Col xs={6} md={3} >
                                        <input type='checkbox' className='ml-4'></input>
                                    </Col>
                                </Row>
                                <Row className='my-2 mx-1'>
                                    <Col xs={12} md={9} >
                                        <div> Văn học </div>
                                    </Col>
                                    <Col xs={6} md={3} >
                                        <input type='checkbox' className='ml-4'></input>
                                    </Col>
                                </Row>
                                <Row className='my-2 mx-1'>
                                    <Col xs={12} md={9} >
                                        <div> Tâm lý-Kỹ năng sống </div>
                                    </Col>
                                    <Col xs={6} md={3} >
                                        <input type='checkbox' className='ml-4'></input>
                                    </Col>
                                </Row>
                                <Row className='my-2 mx-1'>
                                    <Col xs={12} md={9} >
                                        <div> Truyện tranh </div>
                                    </Col>
                                    <Col xs={6} md={3} >
                                        <input type='checkbox' className='ml-4'></input>
                                    </Col>
                                </Row>
                                <Row className='my-2 mx-1'>
                                    <Col xs={12} md={9} >
                                        <div> Ngoại ngữ </div>
                                    </Col>
                                    <Col xs={6} md={3} >
                                        <input type='checkbox' className='ml-4'></input>
                                    </Col>
                                </Row>
                                <span>------------------------------------------</span>
                                <div className='ml-1 mt-4'>
                                    <strong>GIÁ</strong>

                                </div>
                                <Row className='my-2 mx-1'>
                                    <Col md={9} >
                                        <div>1-5$</div>
                                        <div>5-10$</div>
                                        <div>10-30$</div>
                                        <div>trên 30$</div>

                                    </Col>
                                    <Col md={3} >
                                        <input type='checkbox' className='ml-4'></input>
                                        <input type='checkbox' className='ml-4'></input>
                                        <input type='checkbox' className='ml-4'></input>
                                        <input type='checkbox' className='ml-4'></input>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={9}>
                                <Row>
                                    {
                                        // products.forEach((product) => {
                                        //     if (product.stock > 0) {
                                        //         [product].map((x) => (
                                        //             <Col sm={9} md={6} lg={'auto'} xl={3} key={x._id}>
                                        //                 <ItemCard item={x} key={x._id}>
                                        //                 </ItemCard>
                                        //             </Col>))
                                        //     }
                                        // })
                                        products.map((product) => {
                                            return (
                                                <Col sm={9} md={6} lg={'auto'} xl={3} key={product._id}>
                                                    <ItemCard item={product} key={product._id} >
                                                    </ItemCard>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>

                        </Row>
            }
            {/* <div>
                {
                    loading ? <h2>Loading</h2> : error ? <h2>error</h2> :
                        <ItemCards items={products} >


                        </ItemCards>

                    // products.map((product) => (
                    //     <>
                    //     <h2>{product.name}</h2>))
                    //     </>

                }

            </div> */}

        </>
    )
}

export default Products
