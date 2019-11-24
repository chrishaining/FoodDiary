import React, { Fragment } from 'react'
import FoodItem from './FoodItem'

const FoodList = ({ foodList, onFoodItemSelected }) => {

    const foodNodes = foodList.map((foodItem) => {
        return (
            <FoodItem
                key={foodItem.id}
                foodItem={foodItem}
                onFoodItemSelected={onFoodItemSelected}
            />
        )
    })

    return (
        <Fragment>
            <div className="FoodList">
            <h3>Ich bin der FoodList. I pass down to FoodItem.</h3>
           {foodNodes} 
           </div>
        </Fragment>
    )

}

export default FoodList