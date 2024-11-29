import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
