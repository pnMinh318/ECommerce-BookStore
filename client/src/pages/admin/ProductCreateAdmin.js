import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ordersByCurrentUser } from '../redux/actions/oderActions'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { productCreate } from '../../redux/actions/productActions'
import Spinners from '../../components/Spinners'
import Message from '../../components/Message'
function ProductCreateAdmin() {


    const dispatch = useDispatch()
    const history = useHistory()

    const { loading: loadingCreate, success: successCreate, error: errorCreate } = useSelector(state => state.productCreate)


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setInStock] = useState(0)
    const [img, setImg] = useState('')
    const [details, setDetails] = useState({})
    const [discount, setDiscount] = useState(0)
    useEffect(() => {
        if (successCreate) {
            dispatch({ type: 'USER_CREATE_RESET' })
            history.push('/admin/products-list')
        }
    }, [dispatch, history, successCreate])

    const setDetailsHandler = (value, key) => {
        setDetails(dt => ({
            ...dt,
            [key]: value
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(productCreate({
            name: name,
            details: details,
            description: description,
            category: category,
            stock: stock,
            img: img,
            price: price,
            discount: discount,
        }))
    }
    return (
        <>
            <Link to='/admin/products-list' className='btn btn-light my-3 font1p2'>Quay lại</Link>
            <h5> Thêm sản phẩm</h5>
            {loadingCreate && <Spinners></Spinners>}
            {errorCreate && <Message variant='danger' msg={'Tạo thất bại'}></Message>}
            {
                // loading ? <Spinners></Spinners> : error ? <Message variant='danger' msg={error}></Message> :
                <>
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
                                    <Form.Control
                                        type='text'
                                        required
                                        value={category || ''}
                                        onChange={(e) => setCategory(e.target.value)}>
                                    </Form.Control>
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
                            <Button type='submit' variant='primary'> Thêm</Button>
                        </div>
                    </Form>
                    
                </>
            }
        </>
    )
}

export default ProductCreateAdmin
