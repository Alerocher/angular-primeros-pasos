import { CommonModule } from '@angular/common';
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 
 
  character:Character  = {id:'' ,name:'', power:0};


@Input()
public characterList :Character[] = [
{
  //id: 26101997,
  name: 'Trunks',
  power: 10
}
];

@Output()
public onDeleteId: EventEmitter<string>= new EventEmitter();

onDeleteCharacter(id:string|undefined):void
{
  console.log(id);
  this.onDeleteId.emit(id);
}



}

