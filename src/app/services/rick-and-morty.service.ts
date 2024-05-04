import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(
    private httpClient: HttpClient
  ){}

  public retrieveRandomCharacter(number: number): Observable<any> {
    const url = `https://rickandmortyapi.com/api/character/${number}`;
    return this.httpClient.get(url);
  }
}
