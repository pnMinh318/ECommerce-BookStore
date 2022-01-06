import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import { Row, Col } from 'react-bootstrap'
// import { Route } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import Spinners from '../components/Spinners'
import Message from '../components/Message'
import SearchBox from '../components/SearchBox'
import Paginate from '../components/Paginate'
function Products({ history, location, match }) {

    const dispatch = useDispatch()
    const category = location.search ? location.search.split('?category=')[1] : ''
    const query = location.search ? location.search.split('?q=')[1] : ''
    const currentPage = match.params.page || 1 //default page 1

    const productList = useSelector(state => state.productList)
    const { loading, products, error, page, pages } = productList


    const [filterPrice, setFilterByPrice] = useState('')
    const [filterCategory, setFilterByCategory] = useState('')
    const [filterArray, setFilterArray] = useState([])

    useEffect(() => {
        (products.length > 0) && setFilterArray(products)
    }, [products])

    useEffect(() => {
        dispatch(listProducts(query, currentPage, category))
    }, [dispatch, query, currentPage, category])




    // const strStandardlize = (str) => { // chuẩn hóa xóa dấu tiếng Việt
    //     return str.toLowerCase().normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    // }
    //const nameFilter = (e, key, value) => {
    //     e.preventDefault()
    //     const newVal = strStandardlize(value)
    //     const searchResult = filterArray.filter(item =>
    //         strStandardlize(item[key]).includes(newVal))
    //     setFilterArray(searchResult)
    // }

    const priceFilter = (array, price) => {
        const priceFilter = price.split(' ')
        if (priceFilter[0] === 'above') {
            return array.filter(product => product.price > (Number(priceFilter[1]) * 1000))
        } else if (priceFilter[0] === 'under') {
            return array.filter(product => product.price < (Number(priceFilter[1]) * 1000))
        } else if (priceFilter[0] === 'from') {
            return array.filter(product => {
                return product.price > (Number(priceFilter[1]) * 1000) &&
                    (product.price < (Number(priceFilter[3]) * 1000))
            })
        }
        else {
            return array
        }
    }
    // const categoryFilter = (array, category) => {
    //     return (array.filter(product => {
    //         return strStandardlize(product.category).includes(category)
    //     }))
    // }
    useEffect(() => {
        let result = products
        result = priceFilter(result, filterPrice)
        //result = categoryFilter(result, filterCategory)
        if(filterCategory===''){
            history.push('/products')
        }else{
            history.push(`/products?category=${filterCategory}`)
        }
        setFilterArray(result)
    }, [filterCategory, filterPrice, products,history])



    return (
        <>
            <div className='flex-column my-4' style={{ height: '150px' }}>
                <img className='w-100 h-100' src='https://cdn0.fahasa.com/media/wysiwyg/NGOAI-VAN-2018/AUG-2018/Bestsellers1920x350-111.jpg' alt=''></img>
            </div>
            <div className='mt-5 mb-3'>
                <SearchBox history={history} location={location}></SearchBox>
            </div>

            <div className='mb-3 text-left'>
                <span className='mr-3'>Thể loại:</span>
                <select className=' px-3 py-2' defaultValue={''}
                    onChange={(e) => setFilterByCategory(e.target.value)}>
                    <option value={''}>-Xem tất cả-</option>
                    <option value={'van-hoc'}>Văn học</option>
                    <option value={'tam-ly'}>Tâm lý-Kỹ năng sống</option>
                    <option value={'kinh-te'}>Kinh tế</option>
                    <option value={'tieu-thuyet'}>Tiểu thuyết</option>
                    <option value={'sach-giao-khoa'}>Giáo khoa-Tham khảo</option>
                    <option value={'ngoai-ngu'}>Sách ngoại ngữ</option>
                    <option value={'truyen-tranh'}>Truyện tranh-Thiếu nhi</option>
                </select>
                <span className='ml-5 mr-3'>Giá:</span>
                <select className='px-3 py-2' defaultValue=''
                    onChange={(e) => setFilterByPrice(e.target.value)}>
                    <option value={''}>-Xem tất cả-</option>
                    <option value={'above 100'}>Trên 100K</option>
                    <option value={'from 50 to 100'}>Từ 50 đến 100K</option>
                    <option value={'under 50'}>Dưới 50K</option>
                </select>
            </div>

            {loading ? <Spinners> </Spinners> : error ? <Message variant='danger' msg='Không tìm thấy sản phẩm nào'></Message> :
                filterArray.length > 0 ?
                    (
                        <>
                            <Row style={{ minHeight: '400px' }}>
                                <Col xs={12}>
                                    <Row>
                                        {
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
                            </Row>
                            <div className='mt-4'>
                                <Paginate page={page} pages={pages} history={history}></Paginate>
                            </div>
                        </>) :
                    (<div style={{ textAlign: 'center', minHeight: '400px', padding: '20% 0px', backgroundColor: '#caddee8c' }}>
                        <h3>không tìm thấy </h3>
                    </div>)
            }
        </>
    )
}
export default Products
