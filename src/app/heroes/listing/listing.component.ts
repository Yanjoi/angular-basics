import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman'];
  deletedHero: string = '';

  deleteHero() {
     this.deletedHero = this.heroes.shift() || '';
  }

}
