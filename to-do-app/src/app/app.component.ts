import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-app';
  user = 'Sena';
  items = [
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Sinema', action: 'No' },
    { description: 'Spor', action: 'No' },
    { description: 'Ders Çalışma', action: 'No' },
  ];
}
