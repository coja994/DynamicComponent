import { Component } from '@angular/core';
import { ValuesService } from './dynamic.service';

@Component({
    selector: 'text-box',
    template: `
                <div id="tb">
                    <input type="text" [(ngModel)]="property">
                    <button ng-button (click)="log()">log</button>
                </div>
              `,
    styleUrls: ['text-box.component.css']
})
export default class TextBoxComponent{

    constructor(){
    }

    public property: string = "test";
     
    log(){
        console.log(this.property);
    }
}