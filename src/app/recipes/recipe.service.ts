import { EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter < Recipe > ();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://images-gmi-pmc.edge-generalmills.com/eb52c020-c145-440c-8445-911f133c0096.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
