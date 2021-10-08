import React from 'react'
function AddToCartBtn({item,ADD_TO_CART}) {
    return (    
        <>
            <button onClick={()=>ADD_TO_CART(item)}>Add to Cart</button>
        </>
    )
}

export default AddToCartBtn
