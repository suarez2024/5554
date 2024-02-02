import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  constructor( private gifsService: GifsService) {}

  get tags(){
    return this.gifsService._tagsHistory;
  }
}
