import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];



    getIngredients() {
        return this.ingredients.slice();
    }


    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());

    }

    addtoShoppingList(ingredients: Ingredient[]){

        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());

    }



}