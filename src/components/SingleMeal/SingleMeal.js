import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SingleMeal = (props) => {
    const { strMeal, strMealThumb, idMeal } = props.meal;
    const history = useHistory();
    const handleOrder = () =>{
        history.push('/shipment')
    }
    // console.log(props.meal)
    return (
        <div className='col-md-4 pt-5'>
            <Card  style={{backgroundColor:'#F18904'}}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title style={{color:'white'}}>{strMeal}</Card.Title>
                    <Link to={`/meal/${idMeal}`}>
                        <Button variant="dark">Show details</Button> 
                    </Link>
                    <Button
                        onClick={handleOrder}
                        >Click Order</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMeal;