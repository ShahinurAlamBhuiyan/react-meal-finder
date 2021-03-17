import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const MealDetail = () => {
    const history = useHistory();
    const { id } = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [id])

    const handleOrder = () => {
        history.push('/shipment')
    }

    return (
        <div className="card mt-5 container"  style={{backgroundColor:'#F18904', color:'white'}}>
            <div className="row">
                <div className="col-md-6">
                        <img style={{ maxWidth: '100%', width: '30rem', borderRadius: '50%', padding: '20px'}} src={meal.strMealThumb} alt="..." />
                        <a href={meal.strYoutube} target='_blank'><Button style={{margin :'0.5rem 0rem'}} >Watch recipe</Button></a>
                        <br/>
                        <Button
                        onClick={handleOrder}
                        >Click Order</Button>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h2 className="card-title">{meal.strMeal}</h2>
                        <p className="card-text"><strong className="text-muted">Category: {meal.strCategory}</strong></p>
                        <p className="card-text"><strong>food of {meal.strArea}</strong></p>
                        <p className="card-text"> <strong>Instruction:</strong> {meal.strInstructions}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;