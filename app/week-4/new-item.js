"use client";

import { useState } from "react";

export default function NewItem() {


    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }


    return (
        <main className= " flex justify-center w-full ">
            <div className = "p-2 m-4 bg-white text-white w-36">
                <div className = "flex justify-between">
                    <p className = "text-black">{quantity}</p>
                    <div className = "flex">

                        <button type = "button"
                            onClick={decrement}
                            className="w-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700
                            shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400
                            focus:ring-opacity-75"
                            disabled={quantity === 1}
                            >
                            -
                        </button>
                        <button type = "button"
                            onClick={increment}
                            className="w-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:bg-blue-400 disabled:bg-gray-400
                            focus:ring-opacity-75 m1-1" 
                            disabled={quantity === 20}
                            >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}