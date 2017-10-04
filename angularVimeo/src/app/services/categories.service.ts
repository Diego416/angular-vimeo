import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  categories : String[];
  constructor() { 
    this.categories = [ 'Action', 'Comedy', 'Animated', 'Horror'];
  }

  getCategories() : String[] {
    return this.categories;
  }

}
