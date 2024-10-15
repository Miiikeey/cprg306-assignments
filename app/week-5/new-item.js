"use client";

import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
      };


      return (
        <main className="flex justify-center w-full">
          <div className="p-4 m-4 bg-slate-900 text-black max-w-sm w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Item Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                  leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-between">
                <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
                    <div className="flex justify-between">
                        <p className="text-black">{quantity}</p>
                        <div className="flex">
                        <button
                          type="button"
                          onClick={decrement}
                          disabled={quantity === 1}
                          className="w-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700
                          shadow-md focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75"
                          >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={increment}
                          disabled={quantity === 20}
                          className="w-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 
                          shadow-md focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
                          >
                          +
                        </button>
                      </div>
                    </div>
                </div>
                <div>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                  >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg 
                  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                  focus:ring-opacity-75"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </main>
      );
    }