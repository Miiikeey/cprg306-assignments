'use client';

import { useState, useEffect } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { addItem, getItems } from '../_services/shopping-list-service.js';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        try {
            if (user) {
                const items = await getItems(user.uid);
                setItems(items);
            }
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        try {
            if (user) {
                const itemId = await addItem(user.uid, newItem);
                setItems([...items, { id: itemId, ...newItem }]);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleSelectItem = (item) => {
        const cleanName = item.name
            .split(",")[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
            .trim();
        setSelectedItemName(cleanName);
    };

    return (
        <main>
            <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleSelectItem} />
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}