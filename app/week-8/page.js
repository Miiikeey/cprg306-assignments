'use client';

import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js';


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    
    const handleSelectItem = (item) => {
        const cleanName = item.name
        .split(",")[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .trim();
        setSelectedItemName(cleanName);
    }

    return (
        <main>
            <h2 className ="text-3xl font-bold mb-4">Shopping List</h2>
            <div className ="flex">
                <div className ="flex-1 max-w-sm m-2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleSelectItem} />
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}