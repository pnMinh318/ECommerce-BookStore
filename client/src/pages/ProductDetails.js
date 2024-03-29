import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import { productDetails } from '../redux/actions/productActions'
import { Row, Col } from 'react-bootstrap'

import Spinners from '../components/Spinners'
import Message from '../components/Message'
//import Slides from '../components/Slides'


function ProductDetails({ match }) {

    const dispatch = useDispatch()

    useEffect(() => {
        const abort = new AbortController();
        dispatch(productDetails(match.params.id))
        return () => {
            abort.abort();
        }
    }, [dispatch, match.params.id])
    const { loading, product, error } = useSelector(state => state.productDetails) // chọn slice

    return (
        <>
            {
                loading ?
                    <Spinners></Spinners> :
                    error ?
                        <div style={{ textAlign: 'center' }}>
                            <Message variant='danger' msg={'Sorry some thing went wrong'}>   </Message>
                        </div> :
                        (
                            <>
                                <Row className='mb-auto' >
                                    <Col md={5} xs={5} >
                                        <div style={{ height: '400px' }}>
                                            <img src={product.img}
                                                alt={product.name}
                                                className='cartItem__img'></img>
                                        </div>
                                    </Col>
                                    <Col md={7} xs={7} className='ml-auto pl-5 pt-3'>
                                        <div style={{ height: '100%' }}>
                                            <div className='pb-3'
                                                style={{ fontSize: '30px', fontWeight: '900' }}>
                                                {product.name}
                                            </div>
                                            <div className='py-3 '>
                                                {`Nhà cung cấp : ${product.details['Tác giả']}`}
                                                <br></br>
                                                {`Nhà xuất bản : ${product.details['NXB']}`}
                                            </div>
                                            <div className='py-3 pt-3' >
                                                <span style={{ fontSize: '40px', color: 'red' }}> {product.price.toLocaleString('en-US')}đ</span>
                                                {
                                                    product.discount > 0 && (
                                                        <>
                                                            <span style={{ background: 'orange', color: 'white', borderRadius: '5px', border: '2px solid white' }}
                                                                className='ml-3 font1p2 px-2'
                                                            >{product.discount}%</span>
                                                            <span className='ml-3'><del>
                                                                {(product.price + product.price * product.discount / 100).toLocaleString('en-US')}đ
                                                            </del></span>
                                                        </>
                                                    )
                                                }

                                            </div>
                                            <p>Chính sách đổi trả: Đổi trả trong vòng 30 ngày</p>
                                            <label> Tình trạng :</label>
                                            <span style={{ color: 'red', fontSize: '15px' }}>
                                                {product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
                                            </span>
                                            <div>
                                                <button style={{ background: 'red', color: 'white', padding: '10px 30px', borderRadius: '5px' }}
                                                    className='ml-auto'
                                                    disabled={product.stock === 0}
                                                    onClick={() => dispatch(addToCart(product))}>Thêm vào giỏ hàng </button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='my-5 px-3'
                                    style={{ minHeight: '400px', backgroundColor: 'whitesmoke', borderRadius: '15px' }}>
                                    <div className='pt-4 '
                                        style={{ borderBottom: '5px solid black', fontSize: '1.5rem' }}>
                                        <p className='text-info'>THÔNG TIN CHI TIẾT</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div className='w-50 p-5 font-font-weight-lighter'>
                                            {product.description}
                                        </div>
                                        <div className=' w-50'>
                                            <table className='table text-left'>
                                                <tbody>
                                                    {
                                                        Object.keys(product.details).map((detail) => {
                                                            return (
                                                                <tr className='wtf' key={detail}>
                                                                    <th className='wtf'>{detail}</th>
                                                                    <td className='wtf'>{product.details[detail]}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
            }
        </>

    )
}

export default ProductDetails
