import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';


const FoodItem = ({ foodItem, onFoodItemSelected }) => {

    let history = useHistory();

    function handleClick() {
      onFoodItemSelected(foodItem.id);
      history.push(`/foodList/${foodItem.id}`)
    };

    return (
        <Fragment>
            <div className="FoodItem"
            onClick={handleClick}>
        <h4>Ich bin ein food item.</h4>
        <p>A {foodItem.name} is a {foodItem.type}. Its colour is {foodItem.colour}</p>
        </div>
        </Fragment>
    )
}


export default FoodItem