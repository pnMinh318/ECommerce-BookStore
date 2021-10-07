import React from 'react'

function ItemCard() {
    const src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'
    return (
        <div className='card'>
            <img className='card-product-img' src={src} alt={'book'}></img>
            <a className='card-product-description' >book</a>
            <div className='card-product-price'>10</div>
            <p className='card-product-description'>asdsajdnkajsdnkj</p>
            <p><button>Add to Cart</button></p>

        </div>
    )
}

export default ItemCard
