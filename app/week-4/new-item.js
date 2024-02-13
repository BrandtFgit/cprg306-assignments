"use client";

import { useState } from "react";

export default function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSetName = (event) => {
        setName(event.target.value);
    };

    const handleSetQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleSetCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Added item: " + name + ", quantity: "+ quantity + ", category: " + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };


    return(
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit}>
        <div className="mb-2">
          <input className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          type="text" 
          placeholder="Item name" 
          value={name} 
          onChange={handleSetName} 
          required="True"
          />
        </div>

        <div className="flex justify-between">
            <input className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" type="number" min="1" max="99" required="True" defaultValue="1"onChange={handleSetQuantity}/>
            <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" onChange={handleSetCategory}> 
                <option value="" disabled="True">Category</option>
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

        <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            +
        </button>
      </form>
    )
}