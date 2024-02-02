import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent { }
