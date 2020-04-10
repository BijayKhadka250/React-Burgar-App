import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgarIngredient/BurgarIngredient'

const burger = (props) => {
    // console.log(props.ingredients);
    // console.log(props.ingredients.salad);
    // console.log(Object.keys(props.ingredients));
    // console.log(Object.values(props.ingredients));

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        
        // console.log(igkey)
        // console.log([...Array(props.ingredients[igkey])])
        return [...Array(props.ingredients[igkey])].map((_, i ) => {
            // console.log("i=" + i);
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    })
  .reduce((arr, el) => {
        // console.log(el)
        return arr.concat(el)
    },[]);  
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    // console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type= "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"/>

        </div>
    )
}

export default burger;