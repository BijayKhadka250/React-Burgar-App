import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary.js';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('[OrderSummary] willUpdate');
    }
     render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
            <li key={igkey}> 
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
            </li>);
        })
         return(
            <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
    <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
         )
     }
 }
  
 export default OrderSummary;