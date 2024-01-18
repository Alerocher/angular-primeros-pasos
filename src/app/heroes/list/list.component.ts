import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroDeleted?:string;

  public heroNames: string[] = ['SpiderMan','IronMan','Hulk','She Hulk','Thor']

  deleteLastHero()
  {
   this.heroDeleted = this.heroNames.pop();
    console.log( this.heroDeleted );
  }


}
