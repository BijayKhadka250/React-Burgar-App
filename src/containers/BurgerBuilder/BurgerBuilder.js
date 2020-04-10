import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js'
import Backdrop from '../../components/UI/Backdrop/Backdrop';
const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
}
class BurgerBuilder extends Component{
        state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: true,
            purchasing:false
        }

        updatePurchaseState(ingredients){
        //    console.log(Object.keys(ingredients));
        //    console.log(Object.keys(ingredients)
        //    .map(igkey =>{
        //        return ingredients[igkey];
        //    }))
            const sum = Object.values(ingredients)
            // .map(igkey =>{
            //     return ingredients[igkey];
            // })
            
            .reduce((sum,el) => {
                return sum+el;
            }, 0);
            this.setState({purchasable: sum<1});
        }
        addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients 
            });
            this.updatePurchaseState(updatedIngredients);
        }

        removeIngredientHandler = (type) => {
            // if(this.state.ingredients[type] <= 0){
            //     return ;
            // }
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount-1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const pricedeletion = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - pricedeletion;
            this.setState({totalPrice: newPrice, ingredients:updatedIngredients})
            this.updatePurchaseState(updatedIngredients);
        
        }

        purchaseHandler = () => {
            this.setState({purchasing:true});
        }

        purchaseCancelHandler = () => {
            this.setState({purchasing:false});
        }

        purchaseContinueHandler = () => {
            alert('you continue!');
        }
    render(){
        const disabledInfo = {
           ...this.state.ingredients  
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Auxiliary>
                <Backdrop show={this.state.purchasing}
                click = {this.purchaseCancelHandler}
                />
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice.toFixed(2)}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                totalPrice = {this.state.totalPrice}
                purchasable ={this.state.purchasable}
                ordered={this.purchaseHandler}
                ingredients={this.state.ingredients}
                />
                
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;