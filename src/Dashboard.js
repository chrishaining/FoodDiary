import React, { Component, Fragment } from 'react'
import Diary from './Diary'
import FoodList from './FoodList'
import FoodItem from './FoodItem'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: [
                {
                    id: 1,
                    name: "carrot",
                    type: "vegetable",
                    colour: "orange"
                },
                {
                    id: 2,
                    name: "apple",
                    type: "fruit",
                    colour: "green"
                }
            ],
            currentFoodItem: null
        }
        this.onFoodItemSelected = this.onFoodItemSelected.bind(this);
    }

    onFoodItemSelected(id) {
        const selectedFoodItem = this.state.foodList.find((foodItem) => { return foodItem.id === id })
        this.setState({ currentFoodItem: selectedFoodItem })
    }


    render() {
        return (
            <Fragment>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route
                            exact path="/foodlist"
                            render={() =>
                                <FoodList
                                    foodList={this.state.foodList}
                                    onFoodItemSelected={this.onFoodItemSelected}
                                />}
                        />

                        <Route
                            exact path="/foodlist/:id"
                            render={() =>
                                <FoodItem
                                    onFoodItemSelected={this.onFoodItemSelected}
                                    foodItem={this.state.currentFoodItem} />}
                        />

                        <Route
                            exact path="/diary"
                            render={() =>
                                <Diary />}
                        />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Dashboard