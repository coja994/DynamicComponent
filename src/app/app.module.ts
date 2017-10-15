import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValuesService } from './Components/DynamicSecond/dynamic.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//DYNAMIC COMPONENT
import  TextBoxComponent  from './Components/DynamicSecond/text-box.component';
import  DynamicComponent  from './Components/DynamicSecond/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    //DYNAMIC COMPONENT
    TextBoxComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    ValuesService],
    
  bootstrap: [AppComponent],
})
export class AppModule { }