import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ordersByCurrentUser } from '../redux/actions/oderActions'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { productDetails, productUpdate } from '../../redux/actions/productActions'
import Spinners from '../../components/Spinners'
import Message from '../../components/Message'
function ProductUpdateAdmin({ match }) {

    const productID = match.params.id
    const dispatch = useDispatch()
    const history = useHistory()


    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = useSelector(state => state.productUpdate)
    const { loading, product, error } = useSelector(state => state.productDetails)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setInStock] = useState(20)
    const [img, setImg] = useState('')
    const [details, setDetails] = useState({})
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: 'PRODUCT_UPDATE_RESET' })
            history.push('/admin/products-list')
        } else {
            if (!product.name || product._id !== productID) {
                dispatch(productDetails(productID))
            } else {
                setName(product.name)
                setDescription(product.description)
                setPrice(product.price)
                setCategory(product.category)
                setInStock(product.stock)
                setImg(product.img)
                setDetails(product.details)
                setDiscount(product.discount)
            }
        }
    }, [dispatch, history, successUpdate,
        productID, product.name, product.description, product.discount,
        product.price, product.category, product.stock,
        product.details, product._id, product.img])
    //
    const setDetailsHandler = (value, key) => {
        setDetails(dt => ({
            ...dt,
            [key]: value
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        product.name = name
        product.price = Number(price)
        product.details = details
        product.description = description
        product.category = category
        product.stock = Number(stock)
        product.img = img
        product.discount = Number(discount)
        dispatch(productUpdate(product))
    }
    return (
        <>
            <Link to='/admin/products-list' className='btn btn-light my-3 font1p2'>Quay lại</Link>
            <h5> Chỉnh sửa </h5>
            {loadingUpdate && <Spinners></Spinners>}
            {errorUpdate && <Message variant='danger' msg={'Chỉnh sửa'}></Message>}
            {
                loading ? <Spinners></Spinners> :
                    error ? <Message variant='danger' msg='Không tìm thấy sản phẩm'></Message> :

                        <Form onSubmit={(e) => submitHandler(e)}>
                            <Row style={{ padding: '0 20%' }}>
                                <Col xs={8}>
                                    <Form.Group controlId='name'>
                                        <Form.Label>Tên sách</Form.Label>
                                        <Form.Control
                                            type='text'
                                            required
                                            value={name || ''}
                                            onChange={(e) => setName(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>
                                    <div className="input-group mb-3 w-100">
                                        <span className="input-group-text">Giá</span>
                                        <input type="text"
                                            value={price || ''}
                                            className="form-control"
                                            onChange={(e) => setPrice(e.target.value)}
                                            aria-label="Amount (to the nearest dollar)">
                                        </input>
                                        <span className="input-group-text">% Giảm</span>
                                        <input type="number" className="form-control"
                                            max='99' min='0' step='5'
                                            value={discount || 0}
                                            onChange={(e) => setDiscount(e.target.value)}
                                            aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Mô tả</label>
                                        <textarea
                                            className="form-control textarea"
                                            onChange={(e) => setDescription(e.target.value)}
                                            rows="3"
                                            defaultValue={description || ''}>
                                        </textarea>
                                    </div>
                                    <Form.Group controlId='category'>
                                        <Form.Label>Danh mục</Form.Label>
                                        {/* <Form.Control
                                            type='text'
                                            required
                                            value={category || ''}
                                            onChange={(e) => setCategory(e.target.value)}>
                                        </Form.Control> */}
                                        <select className=' w-100 px-3 py-2'
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}>
                                            <option value={'van-hoc'}>Văn học</option>
                                            <option value={'tam-ly'}>Tâm lý-Kỹ năng sống</option>
                                            <option value={'kinh-te'}>Kinh tế</option>
                                            <option value={'tieu-thuyet'}>Tiểu thuyết</option>
                                            <option value={'sach-giao-khoa'}>Giáo khoa-Tham khảo</option>
                                            <option value={'ngoai-ngu'}>Sách ngoại ngữ</option>
                                            <option value={'truyen-tranh'}>Truyện tranh-Thiếu nhi</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group controlId='img'>
                                        <Form.Label>Hình ảnh</Form.Label>
                                        <Form.Control
                                            type='text'
                                            required
                                            value={img || ''}
                                            onChange={(e) => setImg(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={4}> {/* chi tiết sách*/}
                                    <Form.Group controlId='details'>
                                        <Form.Label>Số lượng trong kho</Form.Label>
                                        <Form.Control
                                            type='number' min={0} step={1} max={1000}
                                            value={stock || 0}
                                            required
                                            onChange={(e) => setInStock(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='details'>
                                        <Form.Label>Tác giả</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={details['Tác giả'] || ''}
                                            required
                                            onChange={(e) => setDetailsHandler(e.target.value, 'Tác giả')}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='details'>
                                        <Form.Label>Nhà xuất bản</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={details['NXB'] || ''}
                                            required
                                            onChange={(e) => setDetailsHandler(e.target.value, 'NXB')}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='details'>
                                        <Form.Label>Năm xuất bản</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={details['Năm XB'] || ''}
                                            required
                                            onChange={(e) => setDetailsHandler(e.target.value, 'Năm XB')}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='details'>
                                        <Form.Label>Hình thức</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={details['Hình thức'] || ''}
                                            required
                                            onChange={(e) => setDetailsHandler(e.target.value, 'Hình thức')}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='details'>
                                        <Form.Label>Ngôn ngữ</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={details['Ngôn ngữ'] || ''}
                                            required
                                            onChange={(e) => setDetailsHandler(e.target.value, 'Ngôn ngữ')}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='details'>
                                        <Form.Label>Người dịch</Form.Label>
                                        <Form.Control
                                            type='text'
                                            required
                                            value={details['Người dịch'] || ''}
                                            onChange={(e) => setDetailsHandler(e.target.value, 'Người dịch')}>
                                        </Form.Control>
                                    </Form.Group>

                                </Col>
                            </Row>
                            <div className='text-center'>
                                <Button type='submit' variant='primary'> Cập nhật</Button>
                            </div>
                        </Form>
            }
        </>
    )
}

export default ProductUpdateAdmin
