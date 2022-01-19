import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { List } from '../../model/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl = `${environment.baseUrl}/list`;

  constructor(private http: HttpClient) {}

  all(queryParams?: { query?: string; limit?: number }): Observable<List[]> {
    let params = {};

    if (queryParams) {
      const { query, limit } = queryParams;

      params = query ? { q: query } : {};
      params = limit ? { ...params, ...{ _limit: limit } } : params;
    }

    return this.http.get<List[]>(this.baseUrl, { params });
  }

}
