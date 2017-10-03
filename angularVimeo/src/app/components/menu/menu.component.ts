import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories : String[];
  constructor() { 
    this.categories = [ 'Action', 'Comedy', 'Animated'];
  }

  ngOnInit() {
  }

}
