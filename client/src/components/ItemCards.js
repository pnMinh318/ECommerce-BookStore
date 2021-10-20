import React from 'react'
import ItemCard from './ItemCard'



function ItemCards({items}) { // truyền các item vào đây
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <ItemCard item={item} key={item._id}></ItemCard>
                    )
                })
            }

        </>
    )
}

export default ItemCards
