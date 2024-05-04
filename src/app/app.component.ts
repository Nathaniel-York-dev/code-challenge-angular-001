import { Component } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { RandomHelper } from './libs/random.helper';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentCharacter!: any;
  constructor(private rickAndMortyService: RickAndMortyService) {}

  public onClick() {
    const randomNumber = RandomHelper.generateRandomNumber(1, 100);
    this.rickAndMortyService
      .retrieveRandomCharacter(randomNumber)
      .pipe(
        tap((resp: any) => {
          this.currentCharacter = {
            name: resp.name,
            image: resp.image,
            status: resp.status,
            species: resp.species,
            gender: resp.gender,
          };
        })
      ).subscribe();
  }
}
