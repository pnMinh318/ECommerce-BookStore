import React, { useEffect, useState } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts, productDelete } from '../../redux/actions/productActions'
import Spinners from '../../components/Spinners'
import Message from '../../components/Message'
import { useHistory } from 'react-router'




function ProductsListAdmin() {


    const productsList = useSelector(state => state.productList)
    const userLogin = useSelector(state => state.userLogin)
    const { user } = userLogin

    const [filterArray, setFilterArray] = useState([])
    const { loading, products, error } = productsList
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = useSelector(state => state.productDelete)


    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'PRODUCT_CREATE_RESET' })
        if (!user?.isAdmin) {
            history.push('/login')
        } else {
            dispatch(listProducts())
        }
    }, [dispatch, history, user, successDelete])
    useEffect(() => {
        (products.length > 0) && setFilterArray(products)
    }, [products])

    const handleFilter = (e, key, value) => {
        e.preventDefault()
        console.log('key: ', key)
        console.log('val: ', value)
        const newVal = strStandardlize(value)
        const searchResult = products.filter(item =>
            strStandardlize(item[key]).includes(newVal))
        setFilterArray(searchResult)
    }
    const strStandardlize = (str) => { // chuẩn hóa xóa dấu tiếng Việt
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    }

    const handleDeleteProduct = (id) => {
        if (window.confirm('Bạn có chắc xóa sản phẩm này?')) {
            dispatch(productDelete(id))
        }
    }
    return (
        <>
            <Row>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={() => { history.push('/admin/product/create') }}>
                        <i className='fas fa-plus'></i> Thêm sản phẩm
                    </Button>
                </Col>


            </Row>
            <form className='mb-3'
                onSubmit={(e) => handleFilter(e, 'name', e.target.elements.search__input.value)}>
                <input className='search__input'
                    autoComplete='off'
                    placeholder='Sách bạn muốn tìm'
                    name='search__input'
                    onEmptied={() => setFilterArray([])}></input>
                <button className='search__input' type='submit'> Tìm</button>
            </form>
            {loadingDelete && <Spinners></Spinners>}
            {errorDelete && <Message variant='danger' msg='Xóa thất bại'></Message>}
            <div style={{ minHeight: '500px' }}>
                {
                    loading ? <Spinners></Spinners> :
                        error ? <Message variant='danger' msg={error}></Message> :
                            (
                                <Table striped bordered hover responsive className='table-sm'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên</th>
                                            <th>Đơn giá</th>
                                            <th>Thể loại</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterArray.map(product =>
                                            (<tr key={product._id}>
                                                <td>{product._id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}đ</td>
                                                <td>
                                                    {product.category}
                                                </td>
                                                <td>
                                                    <Button onClick={() => history.push(`/admin/product/${product._id}/edit`)}>Chỉnh sửa</Button>
                                                    <Button style={{ background: 'red' }} onClick={() => handleDeleteProduct(product._id)}>Xoá</Button>
                                                </td>
                                            </tr>))
                                        }
                                    </tbody>
                                </Table>
                            )
                }
            </div>
        </>

    )
}

export default ProductsListAdmin
