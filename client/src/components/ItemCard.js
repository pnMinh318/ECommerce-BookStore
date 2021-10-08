import React from 'react'
import AddToCartBtn from '../redux/bindings/AddToCartBtn'
function ItemCard({item}) {
    const src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'
    return (
        <div className='card'>
            <img className='card-product-img' src={src} alt={'book'}></img>
            <a className='card-product-description' >{item.title}</a>
            <div className='card-product-price'>{item.price}</div>
            <p className='card-product-description'>asdsajdnkajsdnkj</p>
            <p><AddToCartBtn item={item}></AddToCartBtn></p>

        </div>
    )
}

export default ItemCard
