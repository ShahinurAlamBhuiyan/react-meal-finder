import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const MealFinder = () => {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])
    const handleChange = event => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data?.meals))
    }, [search])
    
    return (
        <div>
            <h2>Search delicious meal</h2>
            <input type="text" onChange={handleChange} placeholder='search your meal' />
            <h5>Meals found: {meals?.length || 0}</h5>
            <div className="container row m-auto text-center">
                {
                    meals?.map(meal => <SingleMeal meal={meal}></SingleMeal>)
                }
            </div>
        </div>
    );
};

export default MealFinder;