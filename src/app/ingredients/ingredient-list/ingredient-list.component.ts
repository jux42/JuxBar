import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ingredient} from "../../core/models/ingredient";
import {IngredientService} from "../../core/services/ingredientService";
import {IngredientComponent} from "../ingredient/ingredient.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [
    IngredientComponent,
    NgForOf,
    IngredientComponent
  ],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit{
  @Input()   ingredient !: Ingredient;
  ingredients!: Ingredient[];
  constructor(private ingredientService: IngredientService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ingredientService.getAllIngredients().subscribe(data=>
      this.ingredients = [...data]
    )
  }



}