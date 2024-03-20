import React, { useState, useEffect } from 'react';

function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => data.meals); // Assuming data structure includes a "meals" array
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true); // New state variable to track loading state
    const [error, setError] = useState(null); // New state variable to track errors

    useEffect(() => {
        if (ingredient != ""){
            const loadMealIdeas = async () => {
                try {
                    setLoading(true);
                    const fetchedMeals = await fetchMealIdeas(ingredient);
                    setMeals(fetchedMeals || []); // Ensure meals is an array even if null
                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };
            loadMealIdeas();
        }
    }, [ingredient]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="flex-1 max-w-sm m-2">
            <h3 className="text-xl font-bold">Meal Ideas</h3>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul>
                {meals.map(meal => (
                    <li className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
