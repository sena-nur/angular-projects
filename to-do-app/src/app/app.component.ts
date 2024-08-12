import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { Model, TodoItem } from './model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  model = new Model();
  newItemDescription: string = '';
  isDisplay = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  addItem() {
    if (this.newItemDescription.trim()) {
      // Check if input is not empty
      this.model.items.push(new TodoItem(this.newItemDescription, false));
      this.newItemDescription = ''; // Clear input field after adding the item
    }
  }
}
