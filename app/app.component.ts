import { Component } from '@angular/core';

//A [@Component decorator](https://angular.io/docs/ts/latest/quickstart.html#component-decorator) that tells Angular what template to use and how to create the component.
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})
// Every Angular app has at least one root component, conventionally named AppComponent
export class AppComponent { }
