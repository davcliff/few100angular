import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: ShoppingItem[] = [
    { description: 'Toilet Paper', purchased: false },
    { description: 'Beer', purchased: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement) {
    const newItem: ShoppingItem = {
      description: what.value,
      purchased: false
    };

    this.items = [newItem, ...this.items];

    what.value = ''; // clear out text box
    what.focus(); // put the cursor back there waiting for the next thingy
  }

  markComplete(item: ShoppingItem) {
    item.purchased = true;
  }

  removePurchasedItems() {
    this.items = this.items.filter(item => item.purchased === false);
  }

}

interface ShoppingItem {
  description: string;
  purchased: boolean;
}
