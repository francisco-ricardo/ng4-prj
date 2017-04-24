import {
  Recipe
} from './../recipe.model';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.google.com.br/imgres?imgurl=http%3A%2F%2Ffoodtalk4you.com%2Fwp-content%2Fuploads%2F2017%2F01%2FRecipes-Banner.jpg&imgrefurl=http%3A%2F%2Ffoodtalk4you.com%2Frecipes%2F&docid=f1F8lzl-Q0949M&tbnid=AVbvsS4oLmjvpM%3A&vet=10ahUKEwiJ3u6qk7zTAhVLhJAKHRNhDqEQMwg5KAEwAQ..i&w=1024&h=576&bih=678&biw=1366&q=recipes&ved=0ahUKEwiJ3u6qk7zTAhVLhJAKHRNhDqEQMwg5KAEwAQ&iact=mrc&uact=8'
      ),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.google.com.br/imgres?imgurl=http%3A%2F%2Ffoodtalk4you.com%2Fwp-content%2Fuploads%2F2017%2F01%2FRecipes-Banner.jpg&imgrefurl=http%3A%2F%2Ffoodtalk4you.com%2Frecipes%2F&docid=f1F8lzl-Q0949M&tbnid=AVbvsS4oLmjvpM%3A&vet=10ahUKEwiJ3u6qk7zTAhVLhJAKHRNhDqEQMwg5KAEwAQ..i&w=1024&h=576&bih=678&biw=1366&q=recipes&ved=0ahUKEwiJ3u6qk7zTAhVLhJAKHRNhDqEQMwg5KAEwAQ&iact=mrc&uact=8')
  ];


  constructor() {}

  ngOnInit() {}

}
