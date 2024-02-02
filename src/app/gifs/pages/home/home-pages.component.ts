import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list/card-list.component';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CardListComponent,
  ],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.scss',
})
export class HomePageComponent { }
