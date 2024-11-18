"use client"

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        } else {
            setMeals([]);
        }
    }, [ingredient]);

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals || []);
    };

    return (
        <div>
            <h3 className="text-xl font-bold">Meal Ideas</h3>
            <ul>
                {!ingredient ? (
                
                    <p>Select an item to see meal ideas</p>
                ) : meals.length > 0 ? (
                    <>
                        <p>Here are some meal ideas using {ingredient}:</p>
                        {meals.map(meal => (
                            <li key={meal.idMeal}>{meal.strMeal}</li>
                        ))}
                    </>
                ) : (
                    <p>No meal ideas found for {ingredient}</p>
                )}
            </ul>
        </div>
    );
}



async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json();
    return data.meals;
}

