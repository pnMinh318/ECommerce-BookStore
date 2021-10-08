import React from 'react'
import ItemCard from './ItemCard'
const items = [
    { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110 },
    { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80 },
    { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120 },
    { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260 },
    { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160 },
]


function ItemCards() { // truyền các item vào đây
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <ItemCard item={item} key={item.id}></ItemCard>
                    )
                })
            }

        </>
    )
}

export default ItemCards
