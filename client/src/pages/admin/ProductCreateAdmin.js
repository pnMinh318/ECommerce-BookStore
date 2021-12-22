import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ordersByCurrentUser } from '../redux/actions/oderActions'
import { Form, Button, Container } from 'react-bootstrap'
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
    const [stock, setInStock] = useState(20)
    const [img, setImg] = useState('')
    const [details, setDetails] = useState({})

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: 'USER_CREATE_RESET' })
            history.push('/admin/products-list')
        }
    }, [dispatch, history, successCreate])

    const setDetailsHandler = (value,key) =>{
        setDetails( dt=> ({
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
            price: price
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

                    <Container style={{ padding: '0 20%' }}>
                        <Form onSubmit={(e) => submitHandler(e)}>
                            <Form.Group controlId='name'>
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Giá</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='category'>
                                <Form.Label>Danh mục</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='img'>
                                <Form.Label>Hình ảnh</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='details'>
                                <Form.Label>Tác giả</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    onChange={(e) => setDetailsHandler(e.target.value,'Tác giả')}>
                                </Form.Control>

                            </Form.Group>
                            <Form.Group controlId='details'>
                                <Form.Label>Nhà xuất bản</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    onChange={(e) => setDetailsHandler(e.target.value,'NXB')}>
                                </Form.Control>
                                <Form.Label>Năm xuất bản</Form.Label>
                                
                            </Form.Group>
                            <Form.Group controlId='details'>
                            <Form.Control
                                    type='text'
                                    required
                                    onChange={(e) => setDetailsHandler(e.target.value,'Năm XB')}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='details'>
                                <Form.Label>Hình thức</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    onChange={(e) => setDetailsHandler(e.target.value,'Hình thức')}>
                                </Form.Control>

                            </Form.Group>
                            <Form.Group controlId='details'>
                                <Form.Label>Ngôn ngữ</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    onChange={(e) => setDetailsHandler(e.target.value,'Ngôn ngữ')}>
                                </Form.Control>

                            </Form.Group>
                            <Form.Group controlId='details'>
                                <Form.Label>Người dịch</Form.Label>
                                <Form.Control
                                    type='text'
                                    required
                                    onChange={(e) => setDetailsHandler(e.target.value,'Người dịch')}>
                                </Form.Control>

                            </Form.Group>
                            <Button className='text-center' type='submit' variant='primary'> Thêm</Button>
                        </Form>
                    </Container>
                </>
            }
        </>
    )
}

export default ProductCreateAdmin
