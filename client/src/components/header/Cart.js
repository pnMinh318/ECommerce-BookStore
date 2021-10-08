import React from 'react'
import { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
function Cart({ items, totalPrice }) { //items (array), price : number


    //const [curret,setCurrent]= useState(items)
    return (
        <>
                <IoCartOutline></IoCartOutline>
                {`(${items.length})`}
            {
                (items === 0 && items.totalPrice!==0) ?
                    <h4 style={{ textTransform: 'uppercase' }}>Cart</h4> :
                    <h4 style={{ textTransform: 'uppercase' }}> {`Cart ${totalPrice}$`}</h4>
            }
        </>
    )
}

export default Cart
