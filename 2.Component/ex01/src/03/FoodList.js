import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    //class component의 parameter 가져오기..!
    constructor(props){
        super(props);    
    }

    render() {
        return (
            <ul>
            {
                this.props.foods.map(food=><FoodListItem key={food.no} name={food.name} count={food.count}/>)
            }
            </ul>
        );
    }
}

export default FoodList;