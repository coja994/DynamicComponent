import { Injectable } from '@angular/core';

@Injectable()
export class ValuesService{
    values = new Array<any>();
    br = 0;

    public getValue(val: any){
        this.values[this.br] = val;
        this.br++;
    }
}