import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DogFact {
  id: string;
  fact: string;
}

@Injectable({
  providedIn: 'root'

})
export class DogFactService {

  private apiUrl = '/api/dogfacts';

  constructor(private http: HttpClient) { }

  getDogFacts(): Observable<DogFact[]> {
    return this.http.get<DogFact[]>(this.apiUrl);
  }

  getDogFactById(id: string): Observable<DogFact> {
    return this.http.get<DogFact>(`${this.apiUrl}/${id}`);
  }
}