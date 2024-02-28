"use client";

import { useState } from "react";

import Item from "./item";
import items_json from './items.json';


export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items_json].sort((a, b) => {
        switch(sortBy){
            case "name":
                return a.name.localeCompare(b.name);
            break;

            case "category":
                return a.category.localeCompare(b.category);
            break;

            default:
                return 0;
            break;
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

    const handleGroupedCategoryButtonClick = () => {
        changeSorting("category");
    }

    return(
        <div>
            <ul>
                <label for="sort">Sort by:</label>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={() => handleNameButtonClick()}>Name</button>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={() => handleCategoryButtonClick()}>Category</button>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={() => handleGroupedCategoryButtonClick()}>Grouped Category</button>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                ))}
            </ul>
        </div>
    );
}