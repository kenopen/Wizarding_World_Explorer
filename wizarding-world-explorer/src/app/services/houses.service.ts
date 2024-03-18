import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  private apiUrl = 'https://wizard-world-api.herokuapp.com/Houses';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getHouseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
