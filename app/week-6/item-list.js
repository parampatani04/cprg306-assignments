"use client";

import React, { useState } from 'react';
import items from './items.json';
import item from '../week-6/item.js';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');

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
                    style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;