import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { listNewestProducts } from '../redux/actions/productActions'

import Navbar from '../components/Navbar'
import Slides from '../components/Slides'
import Spinners from '../components/Spinners'
import Message from '../components/Message'


function MainMenu({ history }) {

    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.productNewest)
    useEffect(() => {
        dispatch(listNewestProducts())
    }, [dispatch])
    const imgsData = [
        {
            key: 1,
            src: 'https://static01.nyt.com/images/2019/12/06/books/06critics-list1-CECLN/06critics-list1-superJumbo.jpg',
            alt: 'book2'
        },
        {
            key: 2,
            src: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/CULTBOOKS-WEBSITE-MAIN_uuitc6/books-about-cults-the-girls-afterlives-osho-earthseed.jpg',
            alt: 'book3'
        },
        {
            key: 3,
            src: 'https://static01.nyt.com/images/2019/12/06/books/06critics-lists3/06critics-lists3-mobileMasterAt3x.jpg',
            alt: 'book4'
        }
    ]

    return (
        <div className=''>

            <div className='app-main-menu'>
                {/* <Navbar></Navbar> */}
                <Slides imgsData={imgsData}></Slides>

            </div>
            <div className='flex-column my-4' style={{ height: '150px' }}>
                <Link to='/products'>
                    <img className='w-50 h-100' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-2-2020/New-arrivals-t2-596x186.jpg' alt=''></img>
                </Link>
                <Link to='/products'>
                    <img className='w-50 h-100' src='https://cdn0.fahasa.com/media/wysiwyg/NGOAI-VAN-2018/AUG-2018/Bestsellers1920x350-111.jpg' alt=''></img>
                </Link>
            </div>
            <div style={{ borderRadius: '10px 10px 0 0', backgroundColor: 'antiquewhite' }}>
                <p className='text-uppercase mt-4 px-4 mb-0 pt-1'
                    style={{ borderRadius: '10px 10px 0 0', backgroundColor: 'rgb(255 214 164 / 26%)', fontSize: '1.5rem' }}
                >Mới nhất</p>

                <div className='' style={{ display: 'flex', flexDirection: 'row' }}>
                    {
                        loading ? <Spinners></Spinners> : error ? <Message varient='danger' msg='Đã có lỗi xảy ra'></Message> :
                            products.map(product => (
                                <Card border="light" className='pb-5 mx-1 mb-4  m-0' style={{ opacity: '0.8' }} key={product._id}>
                                    {
                                        product.discount > 0 && (
                                            <div className='text-center card-discount'
                                            >{product.discount}%</div>)
                                    }

                                    <Link to={`products/${product._id}`} >
                                        <Card.Img className='px-5 cartItem__img font1p2' src={product.img} variant='top' ></Card.Img>
                                    </Link>
                                    <Link to={`products/${product._id}`} className='text-decoration-none'>
                                        <Card.Title as='div' variant='top' className='text-center mr-auto px-3'>
                                            {product.name}</Card.Title>
                                    </Link>
                                    <Card.Text as='p' className='text-center m-0 card-product-price ' >
                                        {product.price}đ
                                        {
                                            product.discount > 0 &&
                                            (<small className='ml-3'
                                                style={{ fontSize: '.7rem', color: 'grey', position: 'absolute' }}>
                                                <del>{product.price + product.price * product.discount / 100}đ</del>
                                            </small>)
                                        }

                                    </Card.Text>
                                </Card>
                            ))
                    }

                </div>
                <div className='text-center'>
                    <button className='px-5 h-100 mb-3 py-2 search__input' style={{borderRadius:'10px'}}
                    onClick={() => history.push('/products')}
                    >Xem tất cả</button>
                </div>
            </div>

        </div>
    )
}

export default MainMenu
