import React from 'react'

function RemoveFromCartBtn({ item, REMOVE_FROM_CART }) {
    return (
        <>
            <button onClick={() => REMOVE_FROM_CART(item)}>Remove From Cart</button>
        </>
    )
}

export default RemoveFromCartBtn