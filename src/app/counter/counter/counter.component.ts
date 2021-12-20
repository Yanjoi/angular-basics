import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>The base is: <strong> 5 </strong></h3>

    <button (click)="acumulate(+base)">+ {{ base }}</button>

    <span> {{ number }} </span>

    <button (click)="acumulate(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Contador App';
  number: number = 10;
  base: number = 5;
  acumulate(base: number) {
    this.number += base;
  }
}
