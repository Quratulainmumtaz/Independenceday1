import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDINT_PRICE ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7

}


class BurgerBuilder extends Component{

    state={
        ingredient:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing: false 
    }
    updatePurchaseState (ingredients){
       
        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        })
        .reduce((sum , el)=>{
            return sum +el;
        },0);
        this.setState({purchaseable: sum > 0});
    }
    

    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        const updateCount = oldCount +1;
        const updateIngredient ={
            ...this.state.ingredient
        };
        updateIngredient[type] = updateCount;
        const priceAddition = INGREDINT_PRICE[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice +priceAddition;
        this.setState({totalPrice:newPrice, ingredient:updateIngredient});
        this.updatePurchaseState(updateIngredient);

    }
    //add ingredient 
    
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        if(oldCount<=0){
            return;
        }
        const updateCount = oldCount -1;
        const updateIngredient ={
            ...this.state.ingredient
        };
        updateIngredient[type] = updateCount;
        const priceDeduction = INGREDINT_PRICE[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice -priceDeduction ;
        this.setState({totalPrice:newPrice, ingredient:updateIngredient});
        this.updatePurchaseState(updateIngredient);

    }
    //remove ingredient handler 
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    render(){
        const disabledInfo={
           ...this.state.ingredient
        };
        for(let key in disabledInfo){
            disabledInfo[key] =disabledInfo[key]<=0
        }
        return(
            <Auxiliary> 
               <Model show={this.state.purchasing}>
                   <OrderSummary ingredient={this.state.ingredient} />
               </Model>
                <Burger ingredient={this.state.ingredient} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Auxiliary>

        );

    }
}
export default BurgerBuilder;