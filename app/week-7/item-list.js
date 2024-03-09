"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        switch (sortBy) {
            case "name":
                return a.name.localeCompare(b.name);
            case "category":
                return a.category.localeCompare(b.category);
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
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
    );
}