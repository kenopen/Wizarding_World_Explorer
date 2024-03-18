import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpellsService {
  private apiUrl = 'https://wizard-world-api.herokuapp.com/Spells';

  constructor(private http: HttpClient) {}

  getSpells(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
