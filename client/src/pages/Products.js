import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import { Row, Col } from 'react-bootstrap'

import ItemCard from '../components/ItemCard'
import Spinners from '../components/Spinners'

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
                                <Spinners></Spinners>
                    :
                    <Row>
                        <Col xs={3} className='my-2' style={{ border: '0.5px solid #00000047', borderRadius: '15px', boxShadow: '3px 1px 10px #c0bffe', height: 'fit-content' }}>

                            <div className='ml-1 mt-4'>
                                <strong style={{ fontWeight: '500px' }}>THỂ LOẠI</strong>

                            </div>
                            <Row className='my-2 mx-1'>
                                <Col xs={12} md={8} >
                                    xs=12 md=8


                                </Col>
                                <Col xs={6} md={4} >
                                    <input type='checkbox' className='ml-4'></input>
                                </Col>
                            </Row>
                            <span>------------------------------------------</span>
                            <div className='ml-1 mt-4'>
                                <strong>GIÁ</strong>

                            </div>
                            <Row className='my-2 mx-1'>
                                <Col xs={12} md={8} >
                                    <div>10-50$</div>
                                    <div>dưới 10$</div>

                                </Col>
                                <Col xs={6} md={4} >
                                    <input type='checkbox' className='ml-4'></input>
                                    <input type='checkbox' className='ml-4'></input>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                {products.map((product) => {
                                    return (
                                        <Col sm={9} md={6} lg={'auto'} xl={3} key={product._id}>
                                            <ItemCard item={product} key={product._id}>
                                            </ItemCard>
                                        </Col>
                                    )
                                })}
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
