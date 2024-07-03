import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  constructor(private http: HttpClient) {}

  myList(data: string): Observable<any> {
    const params = new HttpParams().set('query', data);
    return this.http.get('/test/List', { params });
  }
}
