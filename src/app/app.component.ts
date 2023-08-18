import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title: string;
//   numberOne: number = 1;
//   numberTwo: number = 2;
//   togglePokemon: boolean = true;
//   constructor() {
//     this.title = "jose"
//   }
// }

// export class AppComponent {
//   title: string = "basket of baby beavers";
//   imgSrc: string = "https://cwh1.vet.cornell.edu/system/file/baby-beavers-6-jpg";
  
//   constructor() {
    
//   }
// }

export class AppComponent {
  favoriteAnimal: string = "turtle";
  
  constructor() {
    
  }
}
