"use client";


import Item from './item.js';
import { useState } from 'react';
import itemsJson from './items.json';


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    let items = [...itemsJson];
  
    if (sortBy === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "category") {
      items.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    

    return (
       <div>
        <div>
          <label>Sort by:</label>
          <button 
            type="button"
            onClick={() => setSortBy("name")}
            disabled={sortBy === "name"}
            className="bg-orange-700 p-1 m-2 w-28 disabled:bg-orange-500"
            >
            Name
          </button>
          <button 
            type="button"
            disabled={sortBy === "category"}
            onClick={() => setSortBy("category")}
            className="bg-orange-700 p-1 m-2 w-28 disabled:bg-orange-500" 
            >
            Category
          </button>
        </div>
          <ul>
            {items.map((item) => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </ul>
       </div>
    );
}

