"use client";
import React, { useState } from "react";
import Link from "next/link";
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from "./meal-ideas"; 

function clean(text) {
  // Remove emojis
  text = removeEmojis(text);
  
  // Remove amounts like "4 L" or "dozen"
  text = text.replace(/\d+(\s?L|dozen|kg)?/, '').trim();
  text = text.split(',')[0].trim();
  return text;
}

function removeEmojis(text) {
  return text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{1F966}]/gu, '');
}


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };


    const handleItemSelect = (item) => {

      const cleanedName = clean(item.name.trim());
      console.log(cleanedName);
      setSelectedItemName(cleanedName);
    };

    return (
        <main className="bg-slate-950 p-2 m-1 flex">
            <div>
              <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
              <h3 className="text-xl font-bold">Add New Item</h3>
              
              <NewItem onAddItem={handleAddItem}></NewItem>
              <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
            </div>
            <div className="flex-1 ml-4">
              <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
