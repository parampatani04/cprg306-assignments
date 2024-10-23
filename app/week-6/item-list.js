"use client";

import React, { useState } from 'react';
import items from './items.json';
import Item from '../week-6/item.js';



const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div>
                <button
                    onClick={() => setSortBy('name')}
                    className= {` rounded-lg p-3 m-3 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-800'}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className= {` rounded-lg p-3 m-3 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-800'}`}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;