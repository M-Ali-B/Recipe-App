import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientAdded = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];



    getIngredients() {
        return this.ingredients.slice();
    }


    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());

    }

    addtoShoppingList(ingredients: Ingredient[]){

        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());

    }



}