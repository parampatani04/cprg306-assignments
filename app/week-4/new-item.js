"use client"

import React, { useState } from 'react';

function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);

    const decrement = () => setQuantity(quantity - 1);

    return(
        <div className="flex justify-center">
        <div className="flex justify-between p-2 m-4 bg-white text-white w-36">
            <p className="text-black">{quantity}</p>
            <div className="flex gap-2">
            <button onClick={increment} className="w-8 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-500" disabled={quantity==20}>+</button>
            <button onClick={decrement} className="w-8 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-500" disabled={quantity==1}>-</button>
            </div>
        </div>
        </div>
    )
}

export default NewItem;