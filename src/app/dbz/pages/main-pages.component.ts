import { Component, OnInit } from '@angular/core';
import { ListComponent } from "../components/list/list.component";
import { AddcharacterComponent } from '../components/addcharacter/addcharacter.component';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../components/services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    imports: [ListComponent,AddcharacterComponent]
})

export class MainPageComponent implements OnInit {
    
    
    constructor(private dbzService :DbzService) { }

    get characters(): Character[]
    {
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string):void
    {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void
    {
        this.dbzService.addCharacter(character);
    }


    ngOnInit() { }


}