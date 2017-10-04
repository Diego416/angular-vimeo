import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [CategoriesService]
})
export class MenuComponent implements OnInit {

  categories;
  constructor(private categoriesService : CategoriesService) { 
    this.categories = categoriesService.getCategories();
  }

  ngOnInit() {
  }

}
