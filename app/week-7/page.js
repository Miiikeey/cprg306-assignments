'use client';

import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';


export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    
    return (
        <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </div>
    );
}