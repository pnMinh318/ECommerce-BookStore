import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import { Row, Col } from 'react-bootstrap'

import ItemCard from '../components/ItemCard'
import Spinners from '../components/Spinners'
import Message from '../components/Message'

function Products() {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, products, error } = productList

    const [filterArray, setFilterArray] = useState([])

    const strStandardlize = (str) => { // chuẩn hóa xóa dấu tiếng Việt
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    }
    const handleFilter = (e, key, value) => {
        e.preventDefault()
        console.log('key: ', key)
        console.log('val: ', value)
        const newVal = strStandardlize(value)
        const searchResult = products.filter(item =>
            strStandardlize(item[key]).includes(newVal))
        if (searchResult.length < 1) {
            setFilterArray(products)
        } else {
            setFilterArray(searchResult)
        }
        //dispatch({type:'PRODUCT_LIST_SUCCESS',payload:filter})
    }

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    //xl: số item
    return (
        <>
            <div className='mt-5 mb-3'>
                <form className='text-right'
                    onSubmit={(e) => handleFilter(e, 'name', e.target.elements.search__input.value)}>
                    <input className='search__input'
                        autoComplete='off'
                        placeholder='Sách bạn muốn tìm'
                        name='search__input'
                        onEmptied={() => setFilterArray([])}></input>
                    <button className='search__input' type='submit'> Tìm</button>
                </form>

            </div>

            <div className='mb-3 text-left'>
                <span className='mr-3'>Thể loại:</span>
                <select className='px-3 py-2' defaultValue=''
                    onChange={(e) => handleFilter(e, 'category', e.target.value)}>
                    <option value={''}>-Xem tất cả-</option>
                    <option value={'sach'}>Sách</option>
                    <option value={'tieu thuyet'}>Tiểu thuyết</option>
                    <option value={'sach giao khoa'}>Sách giáo khoa</option>
                    <option value={'ngoai ngu'}>Sách ngoại ngữ</option>
                    <option value={'truyen tranh'}>Truyện tranh</option>
                </select>
                <span className='ml-5 mr-3'>Giá:</span>
                <select className='px-3 py-2' defaultValue=''
                    onChange={(e) => handleFilter(e, 'category', e.target.value)}>
                    <option value={''}>-Xem tất cả-</option>
                    <option value={'sach'}>Trên 100K</option>
                    <option value={'tieu-thuyet'}>Từ 50 đến 100K</option>
                    <option value={'tieu-thuyet'}>Dưới 50K</option>

                </select>
            </div>

            {
                filterArray.length > 0 ?
                    (<Row>
                        <Col xs={12}>
                            <Row>
                                {loading ? <Spinners></Spinners>
                                    : error ? <Message variant='danger' msg='Không tìm thấy sản phẩm nào'></Message> :
                                        filterArray.map((product) => {
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
                    </Row>)
                    :
                    <>
                        {
                            loading ?
                                <Spinners></Spinners> :
                                error ?
                                    <div style={{ textAlign: 'center', margin: '20% 0px' }}>
                                        <Message variant='danger' msg={'Sorry some thing went wrong'}>   </Message>
                                    </div> :
                                    <Row>
                                        <Col xs={12}>
                                            <Row>
                                                {
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
                    </>
            }
        </>
    )
}
export default Products
