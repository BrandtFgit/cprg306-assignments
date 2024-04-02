"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        console.log(a,b);
        switch (sortBy) {
            case "name":
                return a.data.name.localeCompare(b.data.name);
            case "category":
                return a.data.category.localeCompare(b.data.category);
            default:
                return 0;
        }
    });

    const changeSorting = (newSort) => {
        setSortBy(newSort);
    };

    const handleNameButtonClick = () => {
        changeSorting("name");
    };

    const handleCategoryButtonClick = () => {
        changeSorting("category");
    };

    return (
        <div className="flex-1 max-w-sm m-2">
            <ul>
                <label htmlFor="sort">Sort by:</label>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={handleNameButtonClick}>Name</button>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={handleCategoryButtonClick}>Category</button>
                
                {sortedItems.map(item => (
                    <Item
                        key={item.data.id}
                        name={item.data.name}
                        quantity={item.data.quantity}
                        category={item.data.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
    );
}