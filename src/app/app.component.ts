import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home/home-pages.component';
import { SearchBoxComponent } from './gifs/components/search-box/search-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SidebarComponent,HomePageComponent,SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17-dev';
}
