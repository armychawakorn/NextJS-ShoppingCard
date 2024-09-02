"use client"
import React, { useEffect, useState } from 'react'

export interface IProduct {
    name: string;
    image: string;
    price: number;
}

export default function Itemcart({ product, addcartCount, removecartCount, handleChange }: { product: IProduct, addcartCount: () => void, removecartCount: () => void, handleChange: (count: number) => void }) {
    const [cardCount, setCardCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleAdd = () => {
        setCardCount(cardCount + 1);
        addcartCount();
        setTotalPrice(product.price * (cardCount + 1));
        handleChange(product.price);
    }
    const handleRemove = () => {
        if (cardCount > 0) {
            setCardCount(cardCount - 1);
            removecartCount();
            setTotalPrice(product.price * (cardCount + 1));
            handleChange(-product.price);
        }
    }
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full' src={product.image} alt='product' />
            <div className='py-2 px-3'>
                <div>
                    <p className='text-lg font-bold py-2'>{product.name}</p>
                    <p className='text-sm font-bold'>ราคา: {new Intl.NumberFormat('en-US').format(product.price)} บาท</p>
                </div>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='w-full'>
                        <div className="grid grid-cols-3">
                            <button className='bg-slate-500 hover:bg-blue-700 text-white font-bold px-4 rounded' style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} onClick={handleRemove}>-</button>
                            <button className='bg-slate-800 hover:bg-blue-700 text-white font-bold px-4'>{cardCount}</button>
                            <button className='bg-slate-500 hover:bg-blue-700 text-white font-bold px-4 rounded' style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} onClick={handleAdd}>+</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className='bg-green-500 hover:bg-green-800 text-white font-bold px-4 rounded w-full'>{new Intl.NumberFormat('en-US').format(product.price * cardCount)} บาท</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
