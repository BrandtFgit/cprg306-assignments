"use client";

import { useState } from "react";

import Link from "next/link";
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';




export default function Page() {
    const [items, setItems] = useState(itemsData);
    
    const handleAddItem = (newItem) => {
      console.log(newItem);
      setItems(prevItems => [...prevItems, newItem]);
    }

    return (
      <main className="bg-slate-950 p-2 m-2">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <h3 className= "text-xl font-bold">Add New Item</h3>
        <NewItem onAddItem={handleAddItem}></NewItem>
        <ItemList items={items}></ItemList>
      </main>
    );
}