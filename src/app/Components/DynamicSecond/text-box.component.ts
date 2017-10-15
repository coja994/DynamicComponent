import { Component } from '@angular/core';
import { ValuesService } from './dynamic.service';

@Component({
    selector: 'text-box',
    template: `
                <div id="tb">
                    <input type="text" [(ngModel)]="property">
                </div>
              `,
    styleUrls: ['text-box.component.css']
})
export default class TextBoxComponent{

    constructor(){
    }

    public property: string = "test";
}
