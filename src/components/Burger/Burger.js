import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgarIngredient/BurgarIngredient'

const burger = (props) => {
    console.log(props.ingredients);
    console.log(props.ingredients.salad);
    console.log(Object.keys(props.ingredients));
    console.log(Object.values(props.ingredients));

    const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        
        console.log(igkey)
        console.log([...Array(props.ingredients[igkey])])
        return [...Array(props.ingredients[igkey])].map((_, i ) => {
            console.log("i=" + i);
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type= "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"/>

        </div>
    )
}

export default burger;