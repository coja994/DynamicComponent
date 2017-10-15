import { Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import TextBoxComponent from './text-box.component';
import { ValuesService } from './dynamic.service';

@Component({
    selector: 'dynamic-component',
    entryComponents: [TextBoxComponent],
    template: `
        <div #dynamicContainer></div>
    `,
})

export default class DynamicComponent {
    constructor(private resolver: ComponentFactoryResolver, private values: ValuesService) {
    }

    @ViewChild("dynamicContainer", {read: ViewContainerRef}) dynamicContainer: ViewContainerRef;

    @Input() set components(data: {component: any}){
        if(!data){
            return;
        }

        let inputProviders = Object.keys(data.component).map((inputName) => {
            return {provide: inputName, useValue: data.component[inputName]};
        });

        let resolved = ReflectiveInjector.resolve(inputProviders);
        
        let injector = ReflectiveInjector.fromResolvedProviders(resolved, this.dynamicContainer.parentInjector);

        let factory = this.resolver.resolveComponentFactory(data.component);

        let component = factory.create(injector);

        this.values.getValue(component.instance);

        this.dynamicContainer.insert(component.hostView);
        
    }
}
