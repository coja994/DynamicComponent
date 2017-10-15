import { Component } from '@angular/core';
import TextBoxComponent from './Components/DynamicSecond/text-box.component';
import DynamicComponent from './Components/DynamicSecond/dynamic.component';
import { ValuesService } from './Components/DynamicSecond/dynamic.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

    private title: string = 'Dynamic component is working!';
    elements = null;
    setComponents = false;
    AllElements: any[] = new Array<any>();
    counter = 0;

    constructor(private valService: ValuesService){}

    loadNew(){
        this.setComponents = true;
        this.elements = {
            component: TextBoxComponent
        }
    }

    logAll(){
        this.AllElements = new Array();
        this.counter = 0;
        this.valService.values.forEach( res => {
            this.AllElements[this.counter] = res.property; 
            this.counter++;
        });
    }
}
