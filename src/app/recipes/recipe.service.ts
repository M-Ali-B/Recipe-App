import { Recipe } from './recipe.model';
import { EventEmitter, Output, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    test = new EventEmitter<string>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
       ,[
           new Ingredient('Meat',1),
           new Ingredient('Milk', 20)
       ] ),
        new Recipe('Another Test Recipe', 
        'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Onion', 3),
            new Ingredient('Sugar', 4)
        ]
        )
    ];

    constructor(private slService: ShoppingListService){

    }


getARecipe(id:number){
return this.recipes[id];
}

    getRecipe() {
        return this.recipes.slice();
    }

    OnAddToShoppingList(ingredient: Ingredient[]){
    this.slService.addtoShoppingList(ingredient);
    }



}
