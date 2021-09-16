import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("vadapav"," its a amazing dish ","https://lh3.googleusercontent.com/gk1CW1qY5VSM6dHdHmv0_2IxnVPCga60TiXL-S_p0WvVXO38dEF_vITpDehQVG17DqoG9rrynDeDObKLlRJ931KyxCgo=w256 "),
    new Recipe("vadapav"," its a amazing dish ","https://lh3.googleusercontent.com/gk1CW1qY5VSM6dHdHmv0_2IxnVPCga60TiXL-S_p0WvVXO38dEF_vITpDehQVG17DqoG9rrynDeDObKLlRJ931KyxCgo=w256 "),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
