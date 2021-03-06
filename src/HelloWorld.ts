import {Component} from '@angular/core';

@Component({
    selector: 'hello-world',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
                  <input type="text" [ng2TelInput]="{initialCountry: 'gb'}" />
               </div>`
})
export class HelloWorld {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);

    }

}