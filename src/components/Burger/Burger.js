import React from 'react';
import BurgerIngredient from './BurgerIngrident/BurgerIngredient';
import './Burger.css';


const Burger = (props)=>{
    let transformedIngredients = Object.keys(props.ingredient)
       .map(igKey=>{
           return[...Array(props.ingredient[igKey])].map((_, i)=>{
               return <BurgerIngredient key={igKey + i} type={igKey} />
           });
       }).reduce((arr, el)=>{
           return arr.concat(el)
       }, []);
       if(transformedIngredients.length===0){
        transformedIngredients=<p>Pleae add the ingredient</p>


       }
       console.log( transformedIngredients);
    return(
        <div className="Burger">
            
            {/* <BurgerIngredient type="bread-top"/>
             {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/> */}
            

           
           
            

        </div>

    );
};

export default Burger;