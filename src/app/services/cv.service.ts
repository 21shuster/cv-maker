import { HttpClient } from '@angular/common/http';
import { Person } from './../models/person.model';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

constructor(private httpClient: HttpClient) { }

saveCV(person: Person): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/create`, person).pipe(
    catchError(error => {
      return error;
    })
  );
}

}
