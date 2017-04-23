import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjt7JmM4bnTAhUJvJAKHfihAOwQjRwIBw&url=https%3A%2F%2Fwww.nps.gov%2Fsubjects%2Fcamping%2Frecipes.htm&psig=AFQjCNF0uvQqi997SNUCOE82RO6tJjRFzw&ust=1493008721201351')
  ];


  constructor() {}

  ngOnInit() {}

}
