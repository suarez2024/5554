import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  value = 'Buscar Jama...';

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  constructor( private gifsServe:GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServe.searchTag(newTag);
    this.tagInput.nativeElement.value ='';
    console.log({newTag});
  }
}
