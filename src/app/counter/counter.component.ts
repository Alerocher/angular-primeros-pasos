import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [],
    templateUrl : './counter.component.html'
})

export class CounterComponent
{
    public counter : number = 10;

    increaseBy():void
    {
      this.counter += 1;
    }
  
    dicreaseBy():void
    {
      this.counter -= 1;
    }
  
    reset():void
    {
      this.counter = 10;
    }
}