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

    /*const groupAndSortByCategory = () => {
        const groupedItems = sortedItems.reduce((acc, currentItem) => {
            if (!acc[currentItem.category]) {
            acc[currentItem.category] = [];
            }
            acc[currentItem.category].push(currentItem);
            return acc;
        }, {});

        // Sort the items within each category alphabetically
        for (let category in groupedItems) {
            groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        }

        return groupedItems;
    };
    

    const renderGroupedItems = () => {
        const groupedItems = groupAndSortByCategory();
        return Object.keys(groupedItems).map(category => (
            <div key={category}>
            <h2 className="text-xl font-bold mt-4 capitalize">{category}</h2>
            {groupedItems[category].map(item => (
                <Item key={item.id} item={item} />
            ))}
            </div>
        ));
    };
    */



    const changeSorting = (newSort) => {
        setSortBy(newSort);
    };

    const handleNameButtonClick = () => {
        changeSorting("name");
    };

    const handleCategoryButtonClick = () => {
        changeSorting("category");
    };

    /*const handleGroupedCategoryButtonClick = () => {
        changeSorting("category");
        groupAndSortByCategory();
    }*/



    return(
        <div>
            <ul>
                <label for="sort">Sort by:</label>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={() => handleNameButtonClick()}>Name</button>
                <button className="bg-orange-700 focus:bg-orange-500 p-1 m-2 w-28" onClick={() => handleCategoryButtonClick()}>Category</button>
                
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                ))}
            </ul>
        </div>
    );
}